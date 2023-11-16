import { LinkIcon, AlertIcon } from '@primer/octicons-react'
import {ActionList, Avatar } from '@primer/react'

const SideBar = props =>  {


    return <ActionList>
    <ActionList.Item>
      <ActionList.LeadingVisual>
        <LinkIcon />
      </ActionList.LeadingVisual>
      Liked Videos
    </ActionList.Item>
    <ActionList.Item variant="danger">
      <ActionList.LeadingVisual>
        <AlertIcon />
      </ActionList.LeadingVisual>
      Watch Later
    </ActionList.Item>
    <ActionList.Item>
      <ActionList.LeadingVisual>
        <Avatar src="https://github.com/mona.png" />
      </ActionList.LeadingVisual>
      History
    </ActionList.Item>
  </ActionList>

}

export default SideBar