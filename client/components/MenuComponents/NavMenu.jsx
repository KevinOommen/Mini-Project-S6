import {Navbar, NavbarBrand, NavbarContent, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";

const NavMenu= () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
      <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <NavbarBrand>
              <AcmeLogo />
         </NavbarBrand>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="start">Menu</NavbarContent>
    
        </Navbar>
  );
}

const Search = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
      <NavbarContent justify="end">
        <Input.Group>
          <Input
            placeholder="Search"
            icon={<SearchIcon />}
            width={searchVisible ? "200px" : "0px"}
            onChange={(e) => console.log(e.target.value)}
            onFocus={toggleSearch}
            onBlur={toggleSearch}
          />
        </Input.Group>
      </NavbarContent>
    
  );
}

export default NavMenu;

