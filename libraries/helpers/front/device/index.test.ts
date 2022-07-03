import { isDesktop, isMobile, isTablet } from '.'

describe('front/device', () => {
    describe('if true', () => {
        it('isMobile', () => {
            const matches = '(max-width: 640px)'
            const mock: any = {
                matchMedia: (data: string) => {
                    if (data === matches) return { matches: true }
                    return { matches: false }
                }
            }

            const mobile = isMobile(mock)
            expect(mobile).toBeTruthy()
        })

        it('isTablet', () => {
            const matches = '(min-width: 641px) and (max-width: 1024px)'
            const mock: any = {
                matchMedia: (data: string) => {
                    if (data === matches) return { matches: true }
                    return { matches: false }
                }
            }

            const tablet = isTablet(mock)
            expect(tablet).toBeTruthy()
        })

        it('isDesktop', () => {
            const matches = '(min-width: 1025px)'
            const mock: any = {
                matchMedia: (data: string) => {
                    if (data === matches) return { matches: true }
                    return { matches: false }
                }
            }

            const desktop = isDesktop(mock)
            expect(desktop).toBeTruthy()
        })
    })

    describe('if false', () => {
        it('isMobile', () => {
            const matches = '(min-width: 641px) and (max-width: 1024px)'
            const mock: any = {
                matchMedia: (data: string) => {
                    if (data === matches) return { matches: true }
                    return { matches: false }
                }
            }

            const mobile = isMobile(mock)
            expect(mobile).toBeFalsy()
        })

        it('isTablet', () => {
            const matches = '(min-width: 1025px)'
            const mock: any = {
                matchMedia: (data: string) => {
                    if (data === matches) return { matches: true }
                    return { matches: false }
                }
            }

            const tablet = isTablet(mock)
            expect(tablet).toBeFalsy()
        })

        it('isDesktop', () => {
            const matches = '(max-width: 640px)'
            const mock: any = {
                matchMedia: (data: string) => {
                    if (data === matches) return { matches: true }
                    return { matches: false }
                }
            }

            const desktop = isDesktop(mock)
            expect(desktop).toBeFalsy()
        })
    })
})
