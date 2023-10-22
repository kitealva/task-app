import {
    Box,
    Progress,
    Text,
    PasswordInput,
    Group,
    Center,
    Button,
    Container,
    Title,
    TextInput,
    Anchor,
    Paper,
    Checkbox,
  } from '@mantine/core';
  import classes from '../compcss/AuthenticationTitle.module.css'

  import { useInputState } from '@mantine/hooks';
  import { IconCheck, IconX } from '@tabler/icons-react';
  import { useState } from 'react';

  function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
      <Text component="div" c={meets ? 'teal' : 'red'} mt={5} size="sm">
        <Center inline>
          {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
          <Box ml={7}>{label}</Box>
        </Center>
      </Text>
    );
  }

  const requirements = [
    { re: /[0-9]/, label: 'Includes number' },
    { re: /[a-z]/, label: 'Includes lowercase letter' },
    { re: /[A-Z]/, label: 'Includes uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
  ];
  
  function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1;
  
    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });
  
    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
  }

  export function AccountCreation() {
    const [value, setValue] = useInputState('');
    const strength = getStrength(value);
    const [showPasswordRequirement, setShowPasswordRequirement] = useState(false);
    const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
    ));
    const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
      ));

    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome to Account Creation!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Have an Account? {' '}
          
          <Anchor href="/authentication" size="sm">
            Log in
          </Anchor>
          
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@gmail.com" required />
        <div>
        <PasswordInput
        value={value}
        onChange={setValue}
        placeholder="Your password"
        label="Password"
        required
        onClick={() => setShowPasswordRequirement(true)}
        />

        <Group gap={5} grow mt="xs" mb="md">
        {bars}
        </Group>


        {showPasswordRequirement && (
        <div>
        <PasswordRequirement label="Has at least 6 characters" meets={value.length > 5} />
        {checks}
        </div>
        )}

        </div>
          
          <Button fullWidth mt="xl">
            Create
          </Button>
        </Paper>
      </Container>
    );
  }

  export default AccountCreation;