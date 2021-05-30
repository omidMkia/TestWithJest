import {mount} from '@vue/test-utils'
import QuestionTest from '@/components/QuestionTest'
import Change from '@/components/Change'
import question from '@/pages/question'
import { jest } from '@jest/globals'

test('integration of two component', async ()=>{
  const pass = jest.spyOn(question.methods, 'pass')
  const updateFn = jest.spyOn(QuestionTest.methods, 'update')
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
  expect(updateFn).toHaveBeenCalled()
  expect(wrapper.emitted().emitUpdate).toBeTruthy()
  expect(pass).toHaveBeenCalled()
  // expect(wrapper.vm.question.title).toBe('4')
  // expect(ques.vm.a).toBe('4')
  // expect(wrapper.vm.editing).toBeFalsy()
  // expect(change.vm.h1).toBe('4')
})
