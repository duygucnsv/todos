import React, { useState } from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import { useStore } from "../store";
import { listeyeEkle, isaretle, temizle } from "../store/liste/listeAction";

const Liste = () => {
  const { listeState, dispatchListe } = useStore();
  const { liste } = listeState;
  const [text, setText] = useState("");

  return (
    <Container className="todos border border-dark">
      <h1 className="h1">TODOS</h1>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="What needs to be done?"
          aria-describedby="basic-addon2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            setText("");
            dispatchListe(listeyeEkle(text));
          }}
        >
          ADD
        </Button>
      </InputGroup>
      <Container>
        {liste.map((item) => (
          <div
            className={item.tamamlandi ? "yapildi" : ""}
            key={item.id}
            onClick={() => dispatchListe(isaretle(item.id))}
          >
            {item.baslik}
          </div>
        ))}
      </Container>
      <Button
        className="btn btn-secondary"
        onClick={() => dispatchListe(temizle())}
      >
        Clear completed
      </Button>
    </Container>
  );
};

export default Liste;
