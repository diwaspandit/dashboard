import { TabList, TabPanels, Tabs, Tab, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";
import { EmailIcon, StarIcon, ChatIcon, CheckCircleIcon, WarningIcon} from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{color:"white", bg:"purple.400"}} >Account Info</Tab>
        <Tab _selected={{color:"white", bg:"purple.400"}}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}/>
                Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Lorem ipsum dolor amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Lorem lorem lorem isst
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="teal.400"/>
                Lorem Lorem is t sss
              </ListItem>
              <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem Lorem is t sss
              </ListItem>
              <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              Lorem Lorem is t sss
              </ListItem>
              <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem Lorem is t sss
              </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
