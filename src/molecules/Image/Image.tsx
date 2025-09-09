import { Skeleton } from '../Skeleton';
import { PreviewGroup } from './PreviewGroup';
import { ImageStyled } from './styles';
import { RdImageCompositionComponent, RdImageInternalComponent } from './types';

const ImageInternal: RdImageInternalComponent = props => {
    const { loading = false, ...antdProps } = props;

    return (
        <>
            {/**
             * Note:
             * Previously, when `loading = true`, the component only rendered the `Skeleton.Node`
             * and skipped rendering the `ImageStyled` completely.
             *
             * However, in that case, the `img` element was never created, so the browser wouldn't start downloading the image,
             * and we couldn't catch the `onLoad` event.
             *
             * Now, even when `loading = true`, the image is still rendered (but hidden) so that:
             * - The browser starts loading it
             * - The `onLoad` event can be triggered when it's ready
             * - Once the image is fully loaded, `loading` can be set to `false`, revealing the image
             *
             * This helps with smoother image transitions (e.g. fade-in) and avoids a jarring pop-in effect.
             */}
            {loading && (
                <Skeleton.Node
                    active
                    style={{
                        width: antdProps?.width,
                        height: antdProps?.height,
                    }}
                />
            )}
            <ImageStyled hidden={loading} {...antdProps} />
        </>
    );
};

export const Image = ImageInternal as RdImageCompositionComponent;

Image.PreviewGroup = PreviewGroup;