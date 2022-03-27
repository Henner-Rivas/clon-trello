import { useState } from "react";
import { AddCard, Collapse } from "./styled-components/Styles";

import AddCardorLisText from "./AddCardorLisText";

const AddCardorList = ({ type,ListId }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Collapse>
        {open && <AddCardorLisText ListId={ListId} type={type} setOpen={setOpen} />}
      </Collapse>

      {!open && (
        <Collapse>
          <AddCard onClick={() => setOpen(true)}>
            <p>+ {type === "card" ? "Add card" : "Add another list"} </p>
          </AddCard>
        </Collapse>
      )}
    </>
  );
};

export default AddCardorList;
