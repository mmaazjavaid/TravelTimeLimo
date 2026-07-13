export const STYLES = {
	transition: 'transition-all duration-250 ease-expo-out',
	transitionFast: 'transition-all duration-150 ease-expo-out',
	// Champagne-gold gradient — primary luxury accent
	goldGradient: {
		color: 'bg-gradient-to-r from-gold-light via-gold to-gold-dark',
		hover: 'hover:from-[#eed6a2] hover:via-[#d0ac66] hover:to-[#b18c3d]',
	},
	// Ink gradient — dark surfaces
	inkGradient: {
		color: 'bg-gradient-to-br from-ink via-ink-soft to-ink-muted',
	},
	// Legacy aliases (kept for backward compatibility)
	gray_white_gradient: {
		color: 'bg-gradient-to-r from-gold-light via-gold to-gold-dark',
		hover: 'hover:from-[#eed6a2] hover:via-[#d0ac66] hover:to-[#b18c3d]',
	},
	gray_blue_gradient: {
		color: 'bg-gradient-to-r from-gold via-gold-dark to-ink-soft',
	},
} as const;
