import { Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

import classes from '../compcss/HeroBullets.module.css'
import { DndList } from './DndList';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Welcome to <span className={classes.highlight}>Tasks</span> my <br /> Task Creation App!
          </Title>
          <Text c="dimmed" mt="md">
            Create tasks, set reminders and share with your friends!
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>New & Unique</b> – The goal with Tasks is to create a fun and unique task creation experience!
            </List.Item>
            <List.Item>
              <b>Free & in Beta</b> – This project will be periodically updated and maintained for a great task creation experience!
            </List.Item>
          </List>

          <Group mt={30}>
          <a href='/authentication/create'>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            </a>
            <a href='https://github.com/kitealva/task-app'>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
            </a>
          </Group>
        </div>
        <Group visibleFrom='md'>
        <DndList />
        </Group>
      </div>
    </Container>
  );
}