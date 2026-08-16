/**
 * Shared submit API for contact, newsletter, CTA, and quote forms.
 * Posts to public/api/submit.php (same-origin on production).
 */
export function getSubmitApiUrl() {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_SUBMIT_API_URL) {
    return process.env.NEXT_PUBLIC_SUBMIT_API_URL;
  }
  return process.env.NEXT_PUBLIC_SUBMIT_API_URL || "/api/submit.php";
}

export async function submitToApi(payload) {
  const url = getSubmitApiUrl();
  const body = { ...payload };
  if (body.cart_items && typeof body.cart_items !== "string") {
    body.cart_items = JSON.stringify(body.cart_items);
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    let data = {};
    try {
      data = JSON.parse(text);
    } catch {
      return {
        success: false,
        error:
          "Mailer is not reachable. Upload public/api/submit.php to public_html/api/submit.php.",
      };
    }
    if (!res.ok) {
      return {
        success: false,
        error: data.error || data.message || "Request failed.",
      };
    }
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      error: err?.message || "Network error. Please try again.",
    };
  }
}
