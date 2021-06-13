import { mount } from '@vue/test-utils'
import Sum from '~/components/Sum'

describe('Sum Unit test', () => {
  test('SumIsTrue', () => {
    const wrapper = mount(Sum)
    wrapper.vm.sum(1,4)
    const result = wrapper.vm.sums
    expect(result).toEqual(5)
  })
})
