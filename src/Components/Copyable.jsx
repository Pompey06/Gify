// Copyable.jsx
import { useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';

// eslint-disable-next-line react/prop-types
const Copyable = ({ text, children, onCopySuccess, ...rest }) => {
  const copyRef = useRef(null);

  useEffect(() => {
    const clipboard = new ClipboardJS(copyRef.current, {
      text: () => {
        // Берём текст либо из пропса, либо из содержимого элемента
        let copyText = text || copyRef.current.textContent.trim();
        // Убираем теги <br>
        return copyText.replace(/<br\s*\/?>/gi, "");
      },
    });

    clipboard.on("success", (e) => {
      e.clearSelection();
      console.log("Текст успешно скопирован: " + e.text);
      if (onCopySuccess) {
        onCopySuccess(e.text);
      }
    });

    clipboard.on("error", () => {
      console.error("Ошибка при копировании");
    });

    return () => {
      clipboard.destroy();
    };
  }, [text, onCopySuccess]);

  return (
    <div ref={copyRef} data-copy {...rest}>
      {children}
    </div>
  );
};

export default Copyable;
