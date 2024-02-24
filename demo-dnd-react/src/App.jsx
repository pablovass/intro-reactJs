import { useState } from "react";
import { User } from "./User";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from "@dnd-kit/sortable";

function App() {
  const [people, setPeople] = useState([
    { name: "Carlos", id: 1 },
    { name: "Peter", id: 2 },
    { name: "Hernan", id: 3 },
  ]);
  const handleDragEnd = (event) => {
    const {active,over}=event
    console.log('drag end');// indica cada vez que se mueve 
    console.log('active',active.id); // el id pero del objeto en que posicion se movio active es la posicion de origen
    console.log('over',over.id); // el id pero del objeto en que posicion se movio over la posicion nueva

   const oldIndex= people.findIndex(person=> person.id ===active.id)
   const newIndex= people.findIndex(person=> person.id ===over.id)
   console.log('oldIndex',oldIndex) // la posision vieja
   console.log('newIndex',newIndex) // la posision nueva

   const newOrder= arrayMove(people,oldIndex,newIndex)
   setPeople(newOrder)
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/6">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <h1 className="text-2x1 font-bold">User List</h1>
      <SortableContext
        items={people}
        strategy={verticalListSortingStrategy}
      >
        {people.map((user) => (
          <User user={user} key={user.id}/>
        ))}
      </SortableContext>
    </DndContext>
      </div>
    </div>
  );
}
export default App;
