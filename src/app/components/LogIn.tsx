import Link from 'next/link';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from '../compcss/AuthenticationTitle.module.css'
  
  export function AuthenticationTitle() {
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Hello User!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          
          <Anchor href="authentication/create" size="sm">
            Create account
          </Anchor>
          
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@gmail.com" required />
          <PasswordInput label="Password" placeholder="Password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm" >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    );
  }