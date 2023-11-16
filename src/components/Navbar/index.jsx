import { Octicon, Header, Avatar, Ma } from "@primer/react"

const Navbar = props => {


    return <Header>
        <Header.Item>
            <Header.Link href="#" fontSize={2}>
                <span>Youtube</span>
            </Header.Link>
        </Header.Item>
        <Header.Item full>Menu</Header.Item>
        <Header.Item sx={{ mr: 0 }}>
            <Avatar src="https://github.com/octocat.png" size={20} square alt="@octocat" />
        </Header.Item>
    </Header>


}

export default Navbar