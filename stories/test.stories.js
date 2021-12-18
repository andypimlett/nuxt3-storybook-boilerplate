import Test from '../components/Test.vue'

export default {
    title: 'Button',
    component: Test
}

export const Primary = () => ({
    components: { Test },
    template: '<Test />'
})
