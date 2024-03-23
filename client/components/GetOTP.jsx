import React from "react";
import {
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";

const AuthComponent = () => {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="OTP"
              placeholder="Enter your OTP"
              type="tel"
            />
            <p className="text-center text-small">
              Resend OTP?{" "}
              <Link size="sm" onPress={() => setSelected("sign-up")}>
                Send again
              </Link>
            </p>
            <div className="flex gap-2 justify-end">
              <Button fullWidth color="primary">
                Verify OTP
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AuthComponent;
