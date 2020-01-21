import $ from "jquery"

let Visibility = null
try {
  Visibility = require("visibilityjs")
} catch (error) {}

const pheromones = {
  CLASS_PREFIX: "PS-",
  API_URL: "https://data.pheromones.io/",
  user: null,
  timer: null,
  IDLE_MODE: false,
  TICK_LENGTH: 2500, // as milliseconds
  IDLE_TICK_THRESHOLD: 72,
  SUBMIT_AFTER: 30, // as ticks, updates after submit
  state: {
    TOTAL_ELEMENTS: 0,
    FIRST_VISIBLE: 0,
    LAST_VISIBLE: 0,
    PAGETOP_Y: 0,
    CURRENT_FIRST: -1,
    CURRENT_LAST: -1,
    IDLE_TICKS: 0,
  },
  setUser: function(user) {
    pheromones.user = user
  },
  statistics: null,
  intervals: [],
  init: function(options) {
    var elementCount = -1
    $(".content-area")
      .find("*")
      .each(function() {
        if (
          !$(this).is("table") &&
          !$(this).is("p") &&
          !$(this).is("pre") &&
          !$(this).is("img") &&
          !$(this).is("ul") &&
          !$(this).is("ol") &&
          !$(this).is(".material-heading")
        ) {
          return
        }

        elementCount++
        $(this).addClass(pheromones.CLASS_PREFIX + elementCount)
      })

    if (elementCount <= 1) {
      return
    }

    pheromones.storage.initPage()
    pheromones.state.TOTAL_ELEMENTS = elementCount

    // Set pheromones attributes based on init options
    pheromones.API_URL = options.apiUrl
    if (options.tickLength) pheromones.TICK_LENGTH = options.tickLength
    if (options.idleTickThreshold)
      pheromones.IDLE_TICK_THRESHOLD = options.idleTickThreshold
    if (options.submitAfter) pheromones.SUBMIT_AFTER = options.submitAfter

    // Options can also contain user group
    pheromones.user = options.username

    pheromones.resetPosition()
    pheromones.scroll.bindScroll()
    pheromones.bindWindowActivity()
    pheromones.bindMouseClicks()
    pheromones.initTimer()

    return pheromones.remove
  },
  remove: function() {
    setTimeout(() => {
      pheromones.storage.submit()
    }, 10)

    window.removeEventListener("scroll", pheromones.onScroll, false)
    pheromones.intervals.forEach(interval => {
      clearInterval(interval)
    })
  },
  resetPosition: function() {
    var v = pheromones.state
    v.FIRST_VISIBLE = pheromones.fn.getTopmostVisibleElement(0, true)
    v.LAST_VISIBLE = pheromones.fn.getBottommostVisibleElement(v.FIRST_VISIBLE)

    v.PAGETOP_Y = window.pageYOffset
  },
  initTimer: function() {
    const interval = setInterval(() => {
      pheromones.storage.addLocation("tick")
    }, pheromones.TICK_LENGTH)
    pheromones.intervals.push(interval)
  },
  bindMouseClicks: function() {
    $(document).click(function(event) {
      var hash = $(event.target).attr("data-hash")
      if (typeof hash === "undefined") {
        return
      }

      var text = $(event.target).text()
      if (text.length > 75) {
        return
      }

      var clickedElement = {
        hash: hash,
        text: text,
      }

      pheromones.storage.addClick(clickedElement)
    })
  },
  bindWindowActivity: function() {
    // requires Visiblity.js
    Visibility.change(function(e, state) {
      if (state === "visible") {
        pheromones.IDLE_MODE = false
        pheromones.storage.addLocation("visibility-change-show")
      } else if (state === "hidden") {
        pheromones.storage.addLocation("visibility-change-hide")
        pheromones.IDLE_MODE = true
      }
    })
  },

  onScroll: function() {
    var state = pheromones.state

    var firstVisible = pheromones.fn.getTopmostVisibleElement(
      state.FIRST_VISIBLE,
      state.PAGETOP_Y > window.pageYOffset,
    )

    if (firstVisible >= 0) {
      state.FIRST_VISIBLE = firstVisible
      state.LAST_VISIBLE = pheromones.fn.getBottommostVisibleElement(
        state.FIRST_VISIBLE,
      )
    }

    state.PAGETOP_Y = window.pageYOffset

    // add information about scroll event
    var scroll = pheromones.scroll

    // get scroll events only four times per second
    var minScrollTime = 100
    var now = pheromones.fn.getTime()

    if (!scroll.scrollTimer) {
      if (now - scroll.lastScrollFireTime > 3 * minScrollTime) {
        scroll.lastScrollFireTime = now
        pheromones.storage.addLocation("scroll")
      }
      scroll.scrollTimer = setTimeout(function() {
        scroll.scrollTimer = null
        scroll.lastScrollFireTime = pheromones.fn.getTime()
        pheromones.storage.addLocation("scroll")
      }, minScrollTime)
    }
  },
  scroll: {
    // include scroll events to the analysis
    scrollTimer: 0,
    lastScrollFireTime: 0,
    bindScroll: function() {
      window.addEventListener("scroll", pheromones.onScroll, false)
    },
  },
  storage: {
    data: null,
    add: function(element) {
      pheromones.storage.data.push(element)
      pheromones.storage.save()
      pheromones.storage.submit()
    },
    addAll: function(list) {
      pheromones.storage.data = pheromones.storage.data.concat(list)
      pheromones.storage.save()
    },
    clear: function() {
      pheromones.storage.data = []
      pheromones.storage.save()
    },
    size: function() {
      return pheromones.storage.data.length
    },
    save: function() {
      if (!pheromones.storage.hasLocalStorageSupport()) {
        return
      }

      localStorage["pheromones.data"] = JSON.stringify(pheromones.storage.data)
    },
    init: function() {
      if (
        !pheromones.storage.hasLocalStorageSupport() ||
        !localStorage["pheromones.data"]
      ) {
        pheromones.storage.data = []
        return
      }

      pheromones.storage.data = JSON.parse(localStorage["pheromones.data"])
    },
    initPage: function() {
      pheromones.storage.init()

      var vis = {
        event_type: "init",
        page_url: window.location.origin + window.location.pathname,
        snapshot_time: pheromones.fn.getTime(),
        user_id: pheromones.user,
      }

      pheromones.storage.add(vis)
    },
    addLocation: function(eventType) {
      var v = pheromones.state

      if (v.CURRENT_FIRST === -1) {
        v.CURRENT_FIRST = v.FIRST_VISIBLE
        v.CURRENT_LAST = v.LAST_VISIBLE
        return
      }

      if (
        v.CURRENT_LAST < v.FIRST_VISIBLE ||
        v.CURRENT_FIRST > v.LAST_VISIBLE
      ) {
        v.CURRENT_FIRST = v.FIRST_VISIBLE
        v.CURRENT_LAST = v.LAST_VISIBLE

        return
      }

      // Being idle when nothing changes
      if (
        v.CURRENT_FIRST === v.FIRST_VISIBLE &&
        v.CURRENT_LAST === v.LAST_VISIBLE
      ) {
        v.IDLE_TICKS++
      } else {
        v.IDLE_TICKS = 0
        pheromones.IDLE_MODE = false
      }

      if (v.IDLE_TICKS >= pheromones.IDLE_TICK_THRESHOLD) {
        pheromones.IDLE_MODE = true
      }

      if (pheromones.IDLE_MODE) {
        return
      }

      var start = v.CURRENT_FIRST
      if (v.CURRENT_FIRST < v.FIRST_VISIBLE) {
        // user has moved up
        start = v.FIRST_VISIBLE
      }

      var end = v.CURRENT_LAST
      if (v.CURRENT_LAST > v.LAST_VISIBLE) {
        // user again has moved up
        end = v.LAST_VISIBLE
      }

      var vis = {
        event_type: eventType,
        first_visible_elem: start,
        last_visible_elem: end,
        top_y: pheromones.state.PAGETOP_Y,
        first_elem_hash: $(pheromones.CLASS_PREFIX + start).attr("data-hash"),
        last_elem_hash: $(pheromones.CLASS_PREFIX + end).attr("data-hash"),
        page_url: window.location.origin + window.location.pathname,
        snapshot_time: pheromones.fn.getTime(),
        user_id: pheromones.user,
      }

      v.CURRENT_LAST = v.LAST_VISIBLE
      v.CURRENT_FIRST = v.FIRST_VISIBLE

      pheromones.storage.add(vis)
    },
    addClick: function(clickInformation) {
      var v = pheromones.state

      var start = v.CURRENT_FIRST
      if (v.CURRENT_FIRST < v.FIRST_VISIBLE) {
        // user has moved up
        start = v.FIRST_VISIBLE
      }

      var end = v.CURRENT_LAST
      if (v.CURRENT_LAST > v.LAST_VISIBLE) {
        // user again has moved up
        end = v.LAST_VISIBLE
      }

      var vis = {
        event_type: "click",
        metadata: clickInformation,
        first_visible_elem: start,
        last_visible_elem: end,
        top_y: pheromones.state.PAGETOP_Y,
        first_elem_hash: $(pheromones.CLASS_PREFIX + start).attr("data-hash"),
        last_elem_hash: $(pheromones.CLASS_PREFIX + end).attr("data-hash"),
        page_url: window.location.origin + window.location.pathname,
        snapshot_time: pheromones.fn.getTime(),
        user_id: pheromones.user,
      }

      v.CURRENT_LAST = v.LAST_VISIBLE
      v.CURRENT_FIRST = v.FIRST_VISIBLE

      pheromones.storage.add(vis)
    },
    submit: function() {
      if (pheromones.storage.size() < pheromones.SUBMIT_AFTER) {
        return
      }

      var dataToSubmit = JSON.stringify(pheromones.storage.data)
      if (!dataToSubmit) {
        return
      }

      pheromones.storage.clear()

      $.post(pheromones.API_URL + "snapshots.json", {
        list: dataToSubmit,
      })
        .done(function(data) {})
        .fail(function(details) {
          if (
            details.status === 200 &&
            details.statusText === "OK" &&
            details.responseText === "{success:true}"
          ) {
            return
          }

          pheromones.storage.addAll(JSON.parse(dataToSubmit))
        })
    },
    hasLocalStorageSupport: function() {
      try {
        return "localStorage" in window && window["localStorage"] !== null
      } catch (e) {
        return false
      }
    },
  },
  fn: {
    getTopmostVisibleElement: function(index, forward) {
      if (index === -1) {
        index = 0
        forward = true
      }

      var seenElement = false
      var lastVisibleElementIndex = -1
      var startingIndex = index

      var count = 0

      while (true) {
        count++
        if (count > 2000) {
          return -1
        }

        var element = $("." + pheromones.CLASS_PREFIX + index)
        if (element.length <= 0) {
          if (forward) {
            index = 0
            forward = true
          } else {
            index = pheromones.state.TOTAL_ELEMENTS
            forward = false
          }

          continue
        }

        if (pheromones.fn.elementVisible(element[0])) {
          seenElement = true
          forward = false

          if (
            lastVisibleElementIndex === -1 ||
            lastVisibleElementIndex > index
          ) {
            lastVisibleElementIndex = index
          }
        }

        if (!pheromones.fn.elementVisible(element[0]) && seenElement) {
          return lastVisibleElementIndex
        }

        if (forward) {
          index++
        } else {
          index--
        }

        if (index === startingIndex) {
          if (lastVisibleElementIndex >= 0 && seenElement) {
            return lastVisibleElementIndex
          }

          return -1
        }
      }
    },
    getBottommostVisibleElement: function(index) {
      if (index === -1) {
        index = pheromones.fn.getTopmostVisibleElement(0, true)
      }

      if (index === -1) {
        return -1
      }

      var lastVisible = -1
      while (true) {
        var element = $("." + pheromones.CLASS_PREFIX + index)
        if (element.length <= 0) {
          return lastVisible
        }

        if (pheromones.fn.elementVisible(element[0])) {
          lastVisible = index
        }

        if (!pheromones.fn.elementVisible(element[0]) && lastVisible >= 0) {
          return lastVisible
        }

        index++
      }
    },
    elementVisible: function(element) {
      if (!element || !element.offsetTop) {
        return false
      }

      var top = element.offsetTop
      var left = element.offsetLeft
      var width = element.offsetWidth
      var height = element.offsetHeight

      while (element.offsetParent) {
        element = element.offsetParent
        top += element.offsetTop
        left += element.offsetLeft
      }

      return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
      )
    },
    getTime: (function() {
      /*
             var performance = window.performance || {};
             var performanceFunction = performance.now
             || performance.mozNow
             || performance.webkitNow
             || performance.msNow
             || performance.oNow;

             if (performanceFunction) {
             return performanceFunction.bind(performance);
             }
             */

      return function() {
        return new Date()
      }
    })(),
  },
}

export default pheromones
