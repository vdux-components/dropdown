/**
 * Imports
 */

import trigger from '@f/trigger-event'
import element from 'vdux/element'
import Dropdown from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('should work', t => {
  const {render, subscribe} = vdux()
  const stop = subscribe(app)
  app()

  t.equal($('.vui-dropdown-menu').style.display, 'none')

  trigger($('#test'), 'click')
  app()

  t.equal($('.vui-dropdown-menu').style.display, '')

  stop()
  t.end()

  function app () {
    return render(<Dropdown btn={<div id='test'>Open Dropdown</div>}></Dropdown>)
  }
})

/**
 * Helpers
 */

function $ (selector) {
  return document.querySelector(selector)
}
