import Link from "next/link";
import {ActionToggle} from "../components/NavButton";
import React from "react";
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconUser,
    IconSquarePlus,
    IconBrandGithub,
    IconBell,
    IconArrowNarrowRight,
    IconLock,
  } from '@tabler/icons-react';
  import classes from '../compcss/HeaderMegaMenu.module.css'
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];
  
  export function NavBar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm" >
          
              <a href="/" className={classes.link}>
                Home
              </a>
              <a href="/authentication" className={classes.link}>
                About
              </a>
              <a href="#" className={classes.link}>
                Purpose
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link} >
                    <Center inline >
                      <Box component="span" mr={6}>
                        More
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{ overflow: 'hidden'}}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Create now!
                        </Text>
                        <Text size="xs" c="dimmed">
                          Start creating your own tasks and reminders here! 
                        </Text>
                        
                      </div>
                      <a href="/authentication/create" className={classes.rightLink}>
                      <Button variant="default">Get started</Button>
                      </a>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>

            <Group visibleFrom="sm">Tasks</Group>
  
            <Group visibleFrom="sm" style={{marginInline: rem(5)}}>
              
            <a href="https://github.com/kitealva/task-app" className={classes.rightLink}>
            <IconBrandGithub></IconBrandGithub>
            </a>

            <a href="/authentication" className={classes.rightLink}>
            <IconBell></IconBell>
            </a>

            <a href="/authentication" className={classes.rightLink}>
            <IconSquarePlus></IconSquarePlus>
            </a>

            <a href="/authentication" className={classes.rightLink}>
            <IconUser></IconUser>
            </a>
            
            <br></br>

            <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            title="Authentication"
            position="right"
          
            >
            {/* Drawer content */}
            </Drawer>
            
            <Burger opened={drawerOpened} onClick={toggleDrawer} size="md" />
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />

            <Text hiddenFrom="sm" fw={700}>TASK</Text>
            <Group hiddenFrom="sm" pr={5}>
            <ActionToggle/>
            </Group>
            
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}

        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              About
            </a>
            <a href="#" className={classes.link}>
              Purpose
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  More
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              
              
              <Button 
              component="a"
              href="/authentication"
              variant="default"
              >
                Log in
              </Button>
              <Button
              component="a"
              href="/authentication/create"
              >Sign up</Button>
            </Group>
          </ScrollArea>
          
        </Drawer>
      
      </Box>
    );
  }


export default NavBar