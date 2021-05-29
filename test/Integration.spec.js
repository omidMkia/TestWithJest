import {mount} from '@vue/test-utils'
import QuestionTest from '@/components/QuestionTest'
import Change from '@/components/Change'
import question from '@/pages/question'

test('integration of two component', async ()=>{
  const wrapper = mount(QuestionTest)
  const change = mount(Change)
  const ques = mount(question)
  const edit = wrapper.find('#edit')
  await edit.trigger('click')
  expect(wrapper.vm.editing).toBeTruthy()
  const input1 = wrapper.find('#title')
  await input1.setValue('4')
  const updateBtn = wrapper.find('#update')
  await updateBtn.trigger('click')
  expect(ques.vm.pass).toHaveBeenCalled()
  expect(wrapper.vm.editing).toBeFalsy()
  expect(wrapper.vm.question.title).toBe('4')
  expect(change.vm.h1).toBe('1')
})
