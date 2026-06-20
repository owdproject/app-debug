const COMPONENT_KEYS = new Set(['component', 'setup', 'render', '__asyncLoader'])

function isVueComponent(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return (
    typeof record.setup === 'function' ||
    typeof record.render === 'function' ||
    typeof record.__asyncLoader === 'function' ||
    record.__v_isVNode === true
  )
}

export function serializeForDebug(value: unknown, space = 2): string {
  const seen = new WeakSet<object>()

  return JSON.stringify(
    value,
    (_key, val) => {
      if (typeof val === 'function') {
        return '[Function]'
      }

      if (val && typeof val === 'object') {
        if (seen.has(val)) {
          return '[Circular]'
        }
        seen.add(val)

        if (isVueComponent(val)) {
          return '[Component]'
        }

        if (Array.isArray(val)) {
          return val
        }

        const record = val as Record<string, unknown>
        const output: Record<string, unknown> = {}

        for (const [key, nested] of Object.entries(record)) {
          if (COMPONENT_KEYS.has(key) && nested !== undefined) {
            output[key] = '[Component]'
            continue
          }
          output[key] = nested
        }

        return output
      }

      return val
    },
    space,
  )
}
