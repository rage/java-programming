updates = File.read("updates")

paths = ["data/osa-1/1-johdanto.md", "data/osa-1/3-muuttujat-ja-ohjelman-kielleistaminen.md", "data/osa-1/4-laskentaa-luvuilla.md", "data/osa-1/5-ehtolauseet.md", "data/osa-1/6-toistaminen.md", "data/osa-1/index.md", "data/osa-1/2-tulostaminen-ja-lukeminen.md"]

paths.each do |path|
  input = File.read(path)

  updates.split("\n").each do |line|
    split = line.split(" ")
    old_id = split[0]
    new_id = split[1]
    input = input.gsub(old_id, new_id)
  end

  File.write(path, input)
end
