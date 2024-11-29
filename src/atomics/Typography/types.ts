import { PropsWithChildren, ReactElement, ReactHTMLElement } from 'react';

export interface IBaseHProps extends PropsWithChildren {}

/**
 * @description H1 component props
 */
export interface IH1Props extends IBaseHProps {}

export interface IH2Props extends IBaseHProps {}
export interface IH3Props extends IBaseHProps {}
export interface IH4Props extends IBaseHProps {}
export interface IH5Props extends IBaseHProps {}
export interface IH6Props extends IBaseHProps {}
export interface ITitleProps extends IBaseHProps {}

export type RdTextProps = IBaseHProps & {
    /**
     * Font weight for the text.
     * Can be a number (100-900) or a string representing font weight name.
     * Examples: "thin", "light", "bold", etc.
     */
    weight?:
        | 100
        | 200
        | 300
        | 400
        | 500
        | 600
        | 700
        | 800
        | 900
        | 'thin'
        | 'extra-light'
        | 'ultra-light'
        | 'light'
        | 'normal'
        | 'regular'
        | 'medium'
        | 'semi-bold'
        | 'demi-bold'
        | 'bold'
        | 'extra-bold'
        | 'ultra-bold'
        | 'black'
        | 'heavy';
};
export interface IDescriptionProps extends IBaseHProps {}
