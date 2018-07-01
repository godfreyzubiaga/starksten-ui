# Starksten UI

### A UI Components for React

#### Hey there! I made this for myself but you're very welcome to use it.

---

## Installation

```
  npm install starksten-ui
```

## Usage

```javascript
  import { H1, Button } from 'starksten-ui';
  ReactDOM.render(
    <div>
      <H1>Hello World!</H1>
      <Button>Click!</Button>
    </div>,
  mountPoint);
```

### Also, this font is required. Add this to your HTML File.

  ` <link href="https://fonts.googleapis.com/css?family=Fira+Sans+Condensed" rel="stylesheet"> `

  [Check out some examples](http://www.godfreyzubiaga.co/showcase-starksten-ui/index.html)
---
## Links

1. [Buttons](#buttons)
1. [Typography](#typography)
1. [Card](#card)
1. [Input](#input)
1. [Line](#line)
1. [VerticallyCenteredDiv](#verticallycentereddiv)
1. [LoginForm](#loginform)

---

## Buttons

A simple button with simple design.

#### Usage:

```javascript
  import { Button } from 'starksten-ui';

  <Button name="Click" />
```

#### Props

##### Default Props

```
  small        = false
  primary      = false
  margin       = '20px auto'
```

##### Usable Props


```
  small     (boolean) > size
  primary   (boolean) > color & background
  margin    (string)  > i.e. '20px' 'auto' '20px auto'
  name      (string) > i.e 'Submit'                               - Required
  action    (function) > i.e () => console.log('hello world')     - Required
```
---
## Typography

Includes h1 - h4, and p tag.

#### Usage:

```html
  import { H1, H2, H3, H4, P } from 'starksten-ui';

  <P> Paragraph </P>
  <H1> Header Text 1 </H1>
```

#### Props

##### Default Props

```
  fontStyle     = none
  fontWeight    = none
  margin        = '0'

  // For 'P' only
  fontSize      = 1em 
  margin        = '5px 0'
```

##### Usable Props

```
  fontStyle   (String) > normal | italic | oblique | initial | inherit
  fontWeight  (String) > bold | thin | normal | 100 - 700
  margin      (String) > (String) > i.e. '20px' 'auto' '20px auto'

  // For 'P' only
  fontSize    (String) > i.e. 1em / 20px
```
---

## Card

Works like a normal div with height and width.

#### Usage:
```javascript
  import { Card } from 'starksten-ui';

  <Card />
```

#### Props

##### Default Props

```
  height & width        = 400px
  margin                = '10px auto'
  color                 = black
  background            = white
  gridArea              = card
```

##### Usable Props

```
  height & width      (String) > i.e. '200px' '80%'
  margin              (String) > i.e. '20px' 'auto' '20px auto'
  background & color  (String) > i.e. 'white' 'rgb(255, 255, 255)' '#ffffff'
  
  // if you use CSS Grid
  gridArea           (String) - i.e. 'first' 'middle'
```
---

## Input

Background is inherited from the container.

#### Usage:
```javascript
  import { Input } from 'starksten-ui';

  <Input type="text" placeholder="Username" name="username" />
```

#### Props

##### Default Props

```
  fontSize        = 1em
  display         = inline-block
  width           = auto
  color           = black
  margin          = 20px auto 30px auto;
```

##### Usable Props

```
  fontSize      (String) > i.e. 1em / 20px
  display       (String) > i.e. 1em / 20px
  width         (String) > i.e. '200px' '80%'
  color:        (String) > i.e. 'white' 'rgb(255, 255, 255)' '#ffffff'
  margin        (String) > i.e. '20px' 'auto' '20px auto'
  name          (String) > i.e. 'username'
  label         (String) > i.e. 'Username'
  placeholder   (String) > i.e. 'Username'
```
---

## Line

A vertical line.

#### Usage:
```javascript
  import { Line } from 'starksten-ui';

  <Line />
```

#### Props

##### Default Props

```
  background        = white
```

##### Usable Props

```
  background  (String) > i.e. 'white' 'rgb(255, 255, 255)' '#ffffff'
```
---

## VerticallyCenteredDiv

That's it. You read that right.

P.S. Its Container must have a height.

#### Usage:
```javascript
  import { VerticallyCenteredDiv, Card } from 'starksten-ui';

  <Card>
    <VerticallyCenteredDiv />
  </Card>
```

#### Props

##### Default Props

```
  background        = white
  height & width    = none & 100%
  margin            = none
  color             = black
  padding           = none
```

##### Usable Props

```
  background          (String) > i.e. 'white' 'rgb(255, 255, 255)' '#ffffff'
  height & width      (String) > i.e. '200px' '80%'
  margin              (String) > i.e. '20px auto'
  color:              (String) > i.e. 'white' 'rgb(255, 255, 255)' '#ffffff'
  padding             (String) > i.e.  '20px' '20px 10px'
```
---

## LoginForm

A simple Login Form which accepts email/username and password.

#### Usage

```javascript
  import { LoginForm } from 'starksten-ui';
  
  const showInputs = (data) => {
    console.log(data);
  };
  
  <LoginForm loginAction={showInputs} />
```

#### Props

##### Default Props

```
  email:        (boolean)   = false
```

##### Usable Props

```
  loginAction:  (function) : required
  email:        (boolean)  : i.e <LoginForm email loginAction={showInputs}>
```
---

