import { useId } from "react";

export type FieldProps = {
  /** Підпис над полем. Обовʼязковий: поле без підпису недоступне скрінрідеру. */
  label: string;
  /** Імʼя поля у формі. */
  name: string;
  /** Тип поля. */
  type?: "text" | "email";
  /** Підказка всередині порожнього поля. */
  placeholder?: string;
  /** Початкове значення («заповнене» поле). */
  defaultValue?: string;
  /** Текст помилки. Якщо передано, поле стає в стан помилки, а текст читається скрінрідером. */
  error?: string;
  /** Вимкнене поле. */
  disabled?: boolean;
};

/**
 * Текстове поле форми з підписом і текстом помилки під ним.
 */
export function Field({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  error,
  disabled = false,
}: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={
          "rounded-control border bg-surface px-6 py-3 text-body text-ink outline-offset-2 " +
          "placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-ink " +
          "disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-muted " +
          (error ? "border-danger" : "border-ink-muted hover:border-ink")
        }
      />
      {error && (
        <p id={errorId} className="text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
