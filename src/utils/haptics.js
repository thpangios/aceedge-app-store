# Edit the file (use your preferred method, or copy this)
cat > src/utils/haptics.js << 'EOF'
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { Capacitor } from '@capacitor/core';

const isNativeMobile = () => Capacitor.isNativePlatform();

export const hapticsLight = async () => {
  if (isNativeMobile()) {
    await Haptics.impact({ style: ImpactStyle.Light });
  }
};

export const hapticsMedium = async () => {
  if (isNativeMobile()) {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
};

export const hapticsHeavy = async () => {
  if (isNativeMobile()) {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  }
};

export const hapticsSuccess = async () => {
  if (isNativeMobile()) {
    await Haptics.notification({ type: NotificationType.Success });
  }
};

export const hapticsWarning = async () => {
  if (isNativeMobile()) {
    await Haptics.notification({ type: NotificationType.Warning });
  }
};

export const hapticsError = async () => {
  if (isNativeMobile()) {
    await Haptics.notification({ type: NotificationType.Error });
  }
};

export default {
  light: hapticsLight,
  medium: hapticsMedium,
  heavy: hapticsHeavy,
  success: hapticsSuccess,
  warning: hapticsWarning,
  error: hapticsError
};
EOF