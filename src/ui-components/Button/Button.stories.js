import React from "react";
import { storiesOf } from "@storybook/react";
import Button, { KIND } from "./Button";

storiesOf("Button", module).add("Button Kinds", () => (
  <>
    <Button kind={KIND.PRIMARY}> Primary</Button>
    <Button kind={KIND.SECONDARY}> Secondary</Button>
    <Button kind={KIND.GREEN}> Green button</Button>
  </>
));
