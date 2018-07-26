import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 3rem;
`

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2.5rem;
  input {
    flex: 1;
    margin-right .25rem;
  }
  button {
    background-color: #22A7F0;
    color: white;
    border: 0;
    padding: 0 1rem;
    font-weight: bold;
    transition: all .2s;
    &:hover {
      cursor: pointer;
      background-color: #4183D7;
    }
  }
`

export default () => (
  <Container>
    <h2>Muistuta minua kun kurssi alkaa</h2>
    <form
      action="https://mooc.us8.list-manage.com/subscribe/post?u=db82662e446284fd41bd8370e&amp;id=21c004aa9c"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <label for="EMAIL">Sähköpostiosoite</label>
      <FieldContainer>
        <input placeholder="arto@example.com" name="EMAIL" />
        <button>Lähetä</button>
      </FieldContainer>
    </form>
  </Container>
)
