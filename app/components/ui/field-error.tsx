export function FieldError({ show, message = 'This field is required.' }: { show: boolean; message?: string }) {
	if (!show) return null;
	return <p className="text-xs font-medium text-destructive">{message}</p>;
}
