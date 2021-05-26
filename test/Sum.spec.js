import {mount} from '@vue/test-utils'
import Sum from '~/components/Sum'

test('SumIsTrue',()=>{
  const wrapper = mount(Sum)
  const f = wrapper.vm.sum(1,4);
  const result = wrapper.vm.sums;
  expect(result).toBe(5)
})
