export const $$qs = <T extends Element>(
  selector: string,
  scope?: HTMLElement
): T => {
  return (scope || document).querySelector(selector) as T;
};

export const $$qsa = <T extends HTMLElement>(
  selector: string,
  scope?: HTMLElement
): NodeListOf<T> => {
  return (scope || document).querySelectorAll(selector) as NodeListOf<T>;
};

export const $$cdf = (): DocumentFragment => {
  return document.createDocumentFragment();
};

export const $$ce = (nodeString: string): HTMLElement => {
  return document.createElement(nodeString);
};
