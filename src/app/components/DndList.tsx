import cx from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from '../compcss/DndList.module.css'

const data = [
  { due: '10/14/2023', date: '10/13/23', symbol: 'L', name: 'Laundry' },
  { due:'12/22/23', date: '10/02/23', symbol: 'TP', name: 'Task Project' },
  { due:'--', date: '01/01/22', symbol: 'G', name: 'Gym' },
  { due:'10/09/23', date: '10/03/23', symbol: 'MP', name: 'Meal Prep' },
  { due: '10/20/23', date: '10/14/23', symbol: 'TM', name: 'Team Meeting' },
];

export function DndList() {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{item.symbol}</Text>
          <div>
            <Text>{item.name}</Text>
            <Text c="dimmed" size="sm">
            Created {item.date} | Due {item.due}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}