import styled from '@emotion/styled';
import { config } from '../..';
import { css } from '@emotion/react';

const NotificationStyles = css`
    .rd-notification-notice-wrapper {
        &:has(.rd-notification-notice-error) {
            background-color: ${config.designToken.colorErrorBg};
            border-left: 4px solid ${config.designToken.colorError};
        }
    }

    .rd-notification-notice-wrapper {
        &:has(.rd-notification-notice-success) {
            background-color: ${config.designToken.colorSuccessBg};
            border-left: 4px solid ${config.designToken.colorSuccess};
        }
    }

    .rd-notification-notice-wrapper {
        &:has(.rd-notification-notice-warning) {
            background-color: ${config.designToken.colorWarningBg};
            border-left: 4px solid ${config.designToken.colorWarning};
        }
    }

    .rd-notification-notice-wrapper {
        .rd-notification-notice-message {
            font-weight: ${config.designToken.fontWeightStrong};
        }
        .rd-notification-notice-close {
            color: ${config.designToken.colorTextLightSolid};
        }
    }
`;

export default NotificationStyles;
