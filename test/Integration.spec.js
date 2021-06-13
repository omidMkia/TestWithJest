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
  // wrapper.vm.update()
  console.log(wrapper.vm.question.title)
  expect(wrapper.vm.editing).toBeFalsy()
  console.log(wrapper.emitted().emitUpdate[1][0])
  ques.vm.pass(wrapper.emitted().emitUpdate[1][0],wrapper.emitted().emitUpdate[1][1])
  expect(ques.vm.x).toBe('4')
  expect(wrapper.emitted().emitUpdate).toBeTruthy()
  await change.setProps({h1: wrapper.emitted().emitUpdate[1][0], div: wrapper.emitted().emitUpdate[1][1]})
  expect(change.vm.h1).toBe('4')
  console.log(change.find('#hOne').text())
  expect(change.find('#hOne').text()).toBe('h1 text is now 4')
})
