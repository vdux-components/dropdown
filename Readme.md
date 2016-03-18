
# dropdown

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Stateful wrapper around vdux-ui's presentational Dropdown and DropdownMenu components.

## Installation

    $ npm install vdux-dropdown

## Usage

Use this to show menus when a button is clicked:

```javascript
import Dropdown from 'vdux-dropdown'
import {Icon} from 'vdux-ui'

function OptionsMenu () {
  return (
    <Dropdown btn={<Icon name='settings' />}>
      <li onClick={changeUsername}>Change username</li>
      <li onClick={changePassword}>Change password</li>
    </Dropdown>
  )
}
```

## API - props

  * `btn` - Function|VNode - The button that opens the dropdown. If it's a vnode, it will open on click. If it's a function, it will receive `{toggle, close}` and should return a vnode (and click handling must be setup manually if you want it).
  * `right` - Anchor the dropdown to the right side of its container
  * `top` - Align it with the top edge of the container
  * `ref` - If you need to access the API of the dropdown, you can specify this `ref` property as a function, and it will provide you with an object containing `{toggle, close}` functions so that you can call into the dropdown from outside if you need.

## License

MIT
