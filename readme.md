# Starksten UI

#### Hey there! I made this for myself but you're very welcome to use it.

---

## Installation

```
  npm install starksten-ui
```

## Usage

```
  import { H1, Button } from 'starksten-ui';
  ReactDOM.render(
    <div>
      <H1>Hello World!</H1>
      <Button>Click!</Button>
    </div>,
  mountPoint);
```

## Buttons

#### Usage:

```
  <Button>Submit</Button>
```

#### Props

```
  small    (boolean) - size
  primary  (boolean) - color & background
```
---
## Typography

#### Usage:
```
  <P>Paragraph</P>
  <H1>Header Text 1</H1>
  <H2>Header Text 2</H2>
  <H3>Header Text 3</H3>
  <H4>Header Text 4</H4>
```

#### Props

```
  fontStyle   (String) > normal | italic | oblique | initial | inherit
  fontSize    (String) > i.e. 1em / 20px
```
---