import { mount, shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('test props', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('test mount', () => {
    const shallowMountWrapper = shallowMount(HelloWorld);
    const mountWrapper = mount(HelloWorld);

    // shallowMount 是浅渲染，不渲染子组件
    // console.log(shallowMountWrapper.html());
    // console.log(mountWrapper.html());
  });

  it('test event', async () => {
    // 挂载组件
    const wrapper = shallowMount(HelloWorld);

    const countText = wrapper.find('[data-testid="count-text"]');
    const button = wrapper.find('button');
    const btn2 = wrapper.find('[data-testid="btn"]');

    expect(countText.text()).toBe('0');

    // 触发事件
    await button.trigger('click');

    expect(wrapper.vm.count).toBe(1);

    expect(countText.text()).toBe('1');

    // console.log(wrapper.emitted());

    await btn2.trigger('click');

    // console.log(wrapper.emitted());

    expect(wrapper.emitted().hello).toBeTruthy();
    expect(wrapper.emitted().hello[0][0]).toBe(123);
  });
});
