/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./_ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				'2xl': '1440px',
				'3xl': '1800px'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				balance: '#fff',
				full: '#000',
				b100: '#B5B8BA',
				b200: '#3F484D',
				b300: '#5E666A',
				b500: '#0F1A20',
				b600: '#1D58FF',
				b700: '#688FFF',
				b800: '#153EB5',
				b900: '#252728',
				wd: '#BFBFBF',

				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				body: 'var(--font-body)',
				heading: 'var(--font-heading)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			transitionDuration: {
				500: '500ms',
				2000: '200ms',
				3000: '300ms',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			spacing: {
				'clamp-8': 'clamp(5px, 3px + 0.19vw, 8px)',
				'clamp-10': 'clamp(8px, 5.2px + 0.13vw, 10px)',
				'clamp-12': 'clamp(8px, 6px + 0.25vw, 12px)',
				'clamp-14': 'clamp(10px, 7px + 0.25vw, 14px)',
				'clamp-16': 'clamp(12px, 11.2px + 1.5vw, 16px)',
				'clamp-18': 'clamp(12px, 12.2px + 0.38vw, 18px)',
				'clamp-20': 'clamp(16px, 1.042vw, 20px)',
				'clamp-24': 'clamp(16px, 16px + 0.5vw, 24px)',
				'clamp-28': 'clamp(18px, 18px + 0.88vw, 28px)',
				'clamp-30': 'clamp(20px, 20px + 0.69vw, 30px)',
				'clamp-32': 'clamp(24px, 1.667vw, 32px)',
				'clamp-36': 'clamp(24px, 24px + 0.75vw, 36px)',
				'clamp-40': 'clamp(26px, 26px + 0.88vw, 40px)',
				'clamp-44': 'clamp(24px, 24px + 1.042vw, 44px)',
				'clamp-46': 'clamp(29px, 29px + 1.26vw, 46px)',
				'clamp-48': 'clamp(30px, 30px + 1.38vw, 48px)',
				'clamp-54': 'clamp(28px, 28px + 1.63vw, 54px)',
				'clamp-56': 'clamp(30px, 30px + 1.63vw, 56px)',
				'clamp-60': 'clamp(32px, 32px + 1.88vw, 60px)',
				'clamp-64': 'clamp(34px, 34px + 2vw, 64px)',
				'clamp-68': 'clamp(35px, 34px + 2.12vw, 68px)',
				'clamp-71': 'clamp(36px, 35px + 2.25vw, 71px)',
				'clamp-72': 'clamp(36px, 36px + 2.25vw, 72px)',
				'clamp-88': 'clamp(36px, 36px + 2.708vw, 88px)',
				'clamp-94': 'clamp(30px, 30px + 4vw, 94px)',
				'clamp-100': 'clamp(40px, 40px + 3.75vw, 100px)',
				'clamp-140': 'clamp(100px, 100px + 2.5vw, 140px)',
			},

			fontSize: {
				'clamp-8': 'clamp(3px, 0.417vw, 8px)',
				'clamp-10': 'clamp(4px, 0.521vw, 10px)',
				'clamp-12': 'clamp(5px, 0.625vw, 12px)',
				'clamp-14': 'clamp(6px, 0.729vw, 14px)',
				'clamp-16': 'clamp(6px, 0.833vw, 16px)',
				'clamp-18': 'clamp(7px, 0.938vw, 18px)',
				'clamp-20': 'clamp(8px, 1.042vw, 20px)',
				'clamp-24': 'clamp(10px, 1.25vw, 24px)',
				'clamp-28': 'clamp(11px, 1.458vw, 28px)',
				'clamp-32': 'clamp(13px, 1.667vw, 32px)',
				'clamp-36': 'clamp(14px, 1.875vw, 36px)',
				'clamp-40': 'clamp(16px, 2.083vw, 40px)',
				'clamp-48': 'clamp(19px, 2.5vw, 48px)',
				'clamp-54': 'clamp(21px, 2.813vw, 54px)',
				'clamp-56': 'clamp(22px, 2.917vw, 56px)',
				'clamp-60': 'clamp(23px, 3.125vw, 60px)',
				'clamp-64': 'clamp(25px, 3.333vw, 64px)',
				'clamp-80': 'clamp(32px, 4.167vw, 80px)',
				'clamp-94': 'clamp(36px, 4.896vw, 94px)',
				'clamp-96': 'clamp(38px, 5vw, 96px)',
				'clamp-100': 'clamp(40px, 5.208vw, 100px)',
				'clamp-120': 'clamp(48px, 6.25vw, 120px)',
				'clamp-140': 'clamp(56px, 7.292vw, 140px)',
				'clamp-210': 'clamp(84px, 10.938vw, 210px)',
			}


		}
	},
	plugins: [require("tailwindcss-animate")],
};