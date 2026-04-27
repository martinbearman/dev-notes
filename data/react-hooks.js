export const hookNotes = [
  {
    name: "useState",
    summary: "Stores local state and triggers a re-render on updates.",
    signature: "const [value, setValue] = useState(initialValue);"
  },
  {
    name: "useEffect",
    summary: "Runs side effects after render and supports cleanup.",
    signature: "useEffect(() => { /* effect */ return () => {}; }, [deps]);"
  },
  {
    name: "useMemo",
    summary: "Caches expensive computed values between renders.",
    signature: "const result = useMemo(() => compute(data), [data]);"
  }
];
