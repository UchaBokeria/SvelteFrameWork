/**
 * @param Template Svelte File Of The Component
 * @param Design Scss File Of The Component
 * @param Module Ts File Of The Component
 */

export const Routers = {
    App: {
        Template: async () => await import('../App.svelte'),
        Design: async () => await import('../App.scss'),
        Module: async () => await import('../App.ts') 
    },
    Home: {
        Template: async () => await import('../Components/Home/Home.svelte'),
        Design: async () => await import('../Components/Home/Home.scss'),
        Module: async () => await import('../Components/Home/Home.ts') 
    }
}