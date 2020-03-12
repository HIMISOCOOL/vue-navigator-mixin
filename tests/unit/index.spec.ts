import { shallowMount } from "@vue/test-utils";
import NavigatorMixin from "@/index";

describe("Navigator Mixin", () => {
	const mountComponent = () =>
		shallowMount(NavigatorMixin, { render: h => h("div") });
	it("_setOnline should set isOnline to true", () => {
		const wrapper = mountComponent();
		wrapper.vm._setOnline();
		expect(wrapper.vm.isOnline).toBe(true);
	});
	it("_setOffline should set isOnline to false", () => {
		const wrapper = mountComponent();
		wrapper.vm._setOffline();
		expect(wrapper.vm.isOnline).toBe(false);
	});
	it("should set isOnline to true when online event fires", () => {
		const wrapper = mountComponent();
		window.dispatchEvent(new Event("online"));
		expect(wrapper.vm.isOnline).toBe(true);
	});
	it("should set isOnline to false when offline event fires", () => {
		const wrapper = mountComponent();
		window.dispatchEvent(new Event("offline"));
		expect(wrapper.vm.isOnline).toBe(false);
	});
});
