import React from 'react';
import './App.css';
// import './styles/App.css';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconBrandSpotify } from '@tabler/icons';

import { AppShell, Navbar, Button } from '@mantine/core'

function App() {
  return (
    <AppShell
      navbar={
        <Navbar
          width={{ base: 300 }}
          height='100vh'
        >
          <Navbar.Section>
            <Button variant='subtle' fullWidth>
              Home
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant='subtle' fullWidth>
              About Me
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant='subtle' fullWidth>
              Portfolio
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant='subtle' fullWidth
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/xRobthewallx"
              leftIcon={<IconBrandTwitter size={35} />}
              styles={(theme) => ({
                root: {
                  border: 0,
                  height: 42,

                  // '&:hover': {
                  //   backgroundColor: theme.fn.darken('#00acee', 0.05),
                  // },
                },

                // leftIcon: {
                //   marginRight: 15,
                // },
              })}
            >
              Follow on Twitter
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant='subtle' fullWidth
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/robert-kreuser-b09bb7133/"
              leftIcon={<IconBrandLinkedin size={35} />}
              styles={(theme) => ({
                root: {
                  border: 0,
                  height: 42,

                  // '&:hover': {
                  //   backgroundColor: theme.fn.darken('#00acee', 0.05),
                  // },
                },

                // leftIcon: {
                //   marginRight: 15,
                // },
              })}
            >
              Follow on LinkedIn
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant='subtle' fullWidth
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MNlegion"
              leftIcon={<IconBrandGithub size={35} />}
              styles={(theme) => ({
                root: {
                  border: 0,
                  height: 42,

                  // '&:hover': {
                  //   backgroundColor: theme.fn.darken('#00acee', 0.05),
                  // },
                },

                // leftIcon: {
                //   marginRight: 15,
                // },
              })}
            >
              Follow on GitHub
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant='subtle' fullWidth
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/playlist/3LFIBdP7eZXJKqf3guepZ1?si=6b17c0f0bf284e1c"
              leftIcon={<IconBrandSpotify size={35} />}
              styles={(theme) => ({
                root: {
                  border: 0,
                  height: 42,

                  // '&:hover': {
                  //   backgroundColor: theme.fn.darken('#00acee', 0.05),
                  // },
                },

                // leftIcon: {
                //   marginRight: 15,
                // },
              })}
            >
              View my Spotify
            </Button>
          </Navbar.Section>
        </Navbar>
      }
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
