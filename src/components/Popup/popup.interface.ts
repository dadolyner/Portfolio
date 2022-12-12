export type DadoPopup = {
    active?: boolean;
    title: string;
    size: number;
    defaultTheme?: boolean;
    theme?: { 
        background: string; 
        border: string; 
        text: string; 
    };
    labelAligment: "left" | "center" | "right";
    inputs?: DadoPopupInputOptions[];
    groups?: DadoPopupGroupOptions[];
    bottomButtons?: DadoPopupBottomButton[];
    onLoad?: () => any;
    onClose?: () => any;
    onConfirm?: (object: any) => any;
}

// Inputs
type DadoTextInput = {
    type: 'text';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    list?: string;
    onChange?: (value: string) => void;
}
type DadoNumberInput = {
    type: 'number';
    name: string;
    label: string;
    value?: number;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    onChange?: (value: number) => void;
}
type DadoEmailInput = {
    type: 'email';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    list?: string;
    onChange?: (value: string) => void;
}
type DadoPasswordInput = {
    type: 'password';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoTelephoneInput = {
    type: 'tel';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    list?: string;
    onChange?: (value: string) => void;
}
type DadoTextareaInput = {
    type: 'textarea';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoColorInput = {
    type: 'color';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoUrlInput = {
    type: 'url';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    list?: string;
    onChange?: (value: string) => void;
}
type DadoDateInput = {
    type: 'date';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    min?: string;
    max?: string;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoTimeInput = {
    type: 'time';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    min?: string;
    max?: string;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoDatetimeLocalInput = {
    type: 'datetime-local';
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    min?: string;
    max?: string;
    readonly?: boolean;
    required?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoButtonInput = {
    type: 'button';
    name: string;
    label?: string;
    value: string;
    color?: string;
    disabled?: boolean;
    theme?: { 
        background?: string;
        backgroundHover?: string;
        border?: string;
        borderHover?: string;
        text?: string;
        textHover?: string;
    };
    onClick?: () => void;
}
type DadoDropdownInput = {
    type: 'dropdown';
    name: string;
    label: string;
    value?: string;
    options: { optionValue: string; optionLabel: string; }[];
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoDropdownSearchInput = {
    type: 'dropdown-search';
    name: string;
    label: string;
    value?: string;
    options: { optionValue: string; optionLabel: string; }[];
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoHtmlInput = {
    type: 'html';
    name: string;
    label: string;
    value?: string;
    disabled?: boolean;
}
type DadoFileInput = {
    type: 'file';
    name: string;
    label: string;
    value?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
type DadoRangeInput = {
    type: 'range';
    name: string;
    label: string;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    onChange?: (value: number) => void;
}
type DadoCheckboxInput = {
    type: 'checkbox';
    name: string;
    label: string;
    value?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
}
type DadoSpacer = {
    type: 'spacer';
    name: string;
    label: string;
    value?: string;
    height?: number;
    width?: number;
    marginTop?: number;
    marginBottom?: number;
}
type DadoPopupInputOptions = DadoTextInput | DadoNumberInput | DadoEmailInput | DadoPasswordInput | DadoTelephoneInput | DadoTextareaInput | DadoColorInput | DadoUrlInput | DadoDateInput | DadoTimeInput | DadoDatetimeLocalInput | DadoButtonInput | DadoDropdownInput | DadoDropdownSearchInput | DadoHtmlInput | DadoFileInput | DadoRangeInput | DadoCheckboxInput | DadoSpacer;
type DadoPopupGroupOptions = {
    name: string;
    inputs?: DadoPopupInputOptions[];
    theme?: { 
        background: string; 
        border: string; 
        text: string; 
    };
}
type DadoPopupBottomButton = {
    name: string;
    value?: string;
    theme?: { 
        background?: string;
        backgroundHover?: string;
        border?: string;
        borderHover?: string;
        text?: string;
        textHover?: string;
    };
    onClick?: () => any;
}

// image
// radio