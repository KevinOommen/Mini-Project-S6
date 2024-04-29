import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@nextui-org/react";


const AuthComponent=()=> {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[400px] my-4" >
        <CardBody className="overflow-hidden" >
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Phone Number" placeholder="Enter your phone number" type="tel" />
                <p className="text-center text-small">
                  Is it your first time here?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Get OTP
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="text" />
                <Input isRequired label="Phone Number" placeholder="Enter your phone number" type="tel" />
                <p className="text-center text-small">
                  Already been here?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Get OTP
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export default AuthComponent;