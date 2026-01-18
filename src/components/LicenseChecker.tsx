"use client";

import { useState } from "react";

interface LicenseValidationResult {
  valid: boolean;
  license_key?: {
    id: string;
    status: "granted" | "revoked" | "disabled";
    usage: number;
    limit_usage: number | null;
    expires_at: string | null;
  };
  error?: string;
}

export default function LicenseChecker() {
  const [licenseKey, setLicenseKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LicenseValidationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateLicense = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const orgId = process.env.NEXT_PUBLIC_POLAR_ORG_ID;
    if (!orgId) {
      setError("Organization ID not configured. Please contact support.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.polar.sh/v1/customer-portal/license-keys/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key: licenseKey.trim(),
            organization_id: orgId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Invalid license key");
        return;
      }

      setResult({
        valid: data.valid,
        license_key: data.license_key,
      });
    } catch {
      setError("Failed to validate license. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const maskLicenseKey = (key: string) => {
    if (key.length <= 8) return key;
    return key.slice(0, 4) + "****" + key.slice(-4);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "granted":
        return "text-accent-green";
      case "revoked":
        return "text-red-500";
      case "disabled":
        return "text-yellow-500";
      default:
        return "text-text-muted";
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={validateLicense} className="space-y-4">
        <div>
          <label
            htmlFor="license-key"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Enter your license key
          </label>
          <input
            type="text"
            id="license-key"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange transition-all"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading || !licenseKey.trim()}
          className="w-full py-3 px-4 bg-gradient-to-r from-accent-orange to-accent-orange/80 hover:from-accent-orange hover:to-accent-green text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Validating...
            </span>
          ) : (
            "Validate License"
          )}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <div className="flex items-center gap-2 text-red-500">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        </div>
      )}

      {result && (
        <div
          className={`mt-6 p-6 rounded-xl border ${
            result.valid
              ? "bg-accent-green/10 border-accent-green/20"
              : "bg-red-500/10 border-red-500/20"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            {result.valid ? (
              <>
                <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-green">
                    License Valid
                  </h3>
                  <p className="text-text-muted text-sm">
                    Your license is active and ready to use
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-500">
                    License Invalid
                  </h3>
                  <p className="text-text-muted text-sm">
                    This license key could not be validated
                  </p>
                </div>
              </>
            )}
          </div>

          {result.license_key && (
            <div className="space-y-3 pt-4 border-t border-border-subtle">
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-sm">License Key</span>
                <span className="text-text-secondary font-mono text-sm">
                  {maskLicenseKey(licenseKey)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-sm">Status</span>
                <span
                  className={`font-medium text-sm capitalize ${getStatusColor(
                    result.license_key.status
                  )}`}
                >
                  {result.license_key.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-sm">Activations</span>
                <span className="text-text-secondary text-sm">
                  {result.license_key.usage}
                  {result.license_key.limit_usage
                    ? ` / ${result.license_key.limit_usage}`
                    : " (unlimited)"}
                </span>
              </div>
              {result.license_key.expires_at && (
                <div className="flex justify-between items-center">
                  <span className="text-text-muted text-sm">Expires</span>
                  <span className="text-text-secondary text-sm">
                    {new Date(result.license_key.expires_at).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
