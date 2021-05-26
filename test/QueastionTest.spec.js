import {mount} from '@vue/test-utils'
import QuestionTest from '~/components/QuestionTest'

test('question',async ()=>{
  const wrapper = mount(QuestionTest)
  const edit = wrapper.find('#edit')
  await edit.trigger('click')
  expect(wrapper.vm.editing).toBeTruthy()
  const input1 = wrapper.find('#title')
  await input1.setValue('4')
  const updateBtn = wrapper.find('#update')
  await updateBtn.trigger('click')
  // const h1 = wrapper.find('')
  expect(wrapper.vm.editing).toBeFalsy()
  expect(wrapper.vm.question.title).toBe('4')
})
