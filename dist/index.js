// ../../guionai/volcengine-provider/index.ts
import { buildOpenAICompatibleProviderFamilyCatalog } from "openclaw/plugin-sdk/provider-catalog-live-runtime";
import { readManifestProviderDefaultModelRef } from "openclaw/plugin-sdk/provider-catalog-shared";
import { defineSingleProviderPluginEntry } from "openclaw/plugin-sdk/provider-entry";
import { ensureModelAllowlistEntry } from "openclaw/plugin-sdk/provider-onboard";

// ../../guionai/volcengine-provider/api.ts
import { applyModelCompatPatch } from "openclaw/plugin-sdk/provider-model-shared";
import { uniqueStrings } from "openclaw/plugin-sdk/string-coerce-runtime";

// ../../guionai/volcengine-provider/models.ts
import { buildManifestProviderCatalogFamily } from "openclaw/plugin-sdk/provider-catalog-shared";

// ../../guionai/volcengine-provider/openclaw.plugin.json
var openclaw_plugin_default = {
  id: "volcengine",
  activation: {
    onStartup: false
  },
  enabledByDefault: true,
  providerCatalogEntry: "./provider-discovery.ts",
  providers: [
    "volcengine",
    "volcengine-plan"
  ],
  setup: {
    providers: [
      {
        id: "volcengine",
        envVars: [
          "VOLCANO_ENGINE_API_KEY"
        ]
      },
      {
        id: "volcengine-tts",
        envVars: [
          "VOLCENGINE_TTS_API_KEY",
          "BYTEPLUS_SEED_SPEECH_API_KEY",
          "VOLCENGINE_TTS_APPID",
          "VOLCENGINE_TTS_TOKEN"
        ]
      }
    ]
  },
  providerAuthAliases: {
    "volcengine-plan": "volcengine"
  },
  providerRequest: {
    providers: {
      volcengine: {
        openAICompletions: {
          supportsStreamingUsage: true
        }
      },
      "volcengine-plan": {
        openAICompletions: {
          supportsStreamingUsage: true
        }
      }
    }
  },
  modelCatalog: {
    providers: {
      volcengine: {
        baseUrl: "https://ark.cn-beijing.volces.com/api/v3",
        api: "openai-completions",
        models: [
          {
            id: "doubao-seed-evolving",
            name: "Doubao Seed Evolving",
            reasoning: true,
            input: [
              "text",
              "image"
            ],
            contextWindow: 1024e3,
            maxTokens: 256e3,
            cost: {
              input: 0.885478,
              output: 4.427391,
              cacheRead: 0.177096,
              cacheWrite: 0
            }
          },
          {
            id: "doubao-seed-2-1-pro-260628",
            name: "Doubao Seed 2.1 Pro",
            reasoning: true,
            input: [
              "text",
              "image"
            ],
            contextWindow: 256e3,
            maxTokens: 256e3,
            cost: {
              input: 0.885478,
              output: 4.427391,
              cacheRead: 0.177096,
              cacheWrite: 0
            }
          },
          {
            id: "doubao-seed-2-1-turbo-260628",
            name: "Doubao Seed 2.1 Turbo",
            reasoning: true,
            input: [
              "text",
              "image"
            ],
            contextWindow: 256e3,
            maxTokens: 256e3,
            cost: {
              input: 0.442739,
              output: 2.213695,
              cacheRead: 0.088548,
              cacheWrite: 0
            }
          },
          {
            id: "glm-5-2-260617",
            name: "GLM 5.2",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 1024e3,
            maxTokens: 128e3,
            cost: {
              input: 1.180638,
              output: 4.132231,
              cacheRead: 0.295159,
              cacheWrite: 0
            }
          },
          {
            id: "deepseek-v4-pro-260425",
            name: "DeepSeek V4 Pro",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 1024e3,
            maxTokens: 384e3,
            cost: {
              input: 1.770956,
              output: 3.541913,
              cacheRead: 0.14758,
              cacheWrite: 0
            }
          },
          {
            id: "deepseek-v4-flash-260425",
            name: "DeepSeek V4 Flash",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 1024e3,
            maxTokens: 384e3,
            cost: {
              input: 0.14758,
              output: 0.295159,
              cacheRead: 0.029516,
              cacheWrite: 0
            }
          },
          {
            id: "kimi-k2-5-260127",
            name: "Kimi K2.5",
            input: [
              "text",
              "image"
            ],
            contextWindow: 256e3,
            maxTokens: 4096,
            cost: {
              input: 1e-4,
              output: 2e-4,
              cacheRead: 0,
              cacheWrite: 0
            },
            status: "deprecated",
            replacedBy: "doubao-seed-evolving"
          },
          {
            id: "glm-4-7-251222",
            name: "GLM 4.7",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 2e5,
            maxTokens: 128e3,
            cost: {
              input: 1e-4,
              output: 2e-4,
              cacheRead: 0,
              cacheWrite: 0
            },
            status: "deprecated",
            replacedBy: "glm-5-2-260617"
          },
          {
            id: "deepseek-v3-2-251201",
            name: "DeepSeek V3.2",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 128e3,
            maxTokens: 32e3,
            cost: {
              input: 0.295159,
              output: 0.442739,
              cacheRead: 0.059032,
              cacheWrite: 0,
              tieredPricing: [
                {
                  input: 0.295159,
                  output: 0.442739,
                  cacheRead: 0.059032,
                  cacheWrite: 0,
                  range: [
                    0,
                    32e3
                  ]
                },
                {
                  input: 0.590319,
                  output: 0.885478,
                  cacheRead: 0.059032,
                  cacheWrite: 0,
                  range: [
                    32e3
                  ]
                }
              ]
            },
            status: "deprecated",
            replacedBy: "deepseek-v4-flash-260425"
          }
        ]
      },
      "volcengine-plan": {
        baseUrl: "https://ark.cn-beijing.volces.com/api/coding/v3",
        api: "openai-completions",
        defaultModel: "ark-code-latest",
        models: [
          {
            id: "ark-code-latest",
            name: "Ark Coding Plan",
            input: [
              "text"
            ],
            contextWindow: 256e3,
            maxTokens: 4096,
            cost: {
              input: 0,
              output: 0,
              cacheRead: 0,
              cacheWrite: 0
            }
          },
          {
            id: "doubao-seed-2.1-turbo",
            name: "Doubao Seed 2.1 Turbo",
            reasoning: true,
            input: [
              "text",
              "image"
            ],
            contextWindow: 256e3,
            maxTokens: 256e3,
            cost: {
              input: 0,
              output: 0,
              cacheRead: 0,
              cacheWrite: 0
            }
          },
          {
            id: "glm-5.2",
            name: "GLM 5.2",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 1024e3,
            maxTokens: 128e3,
            cost: {
              input: 0,
              output: 0,
              cacheRead: 0,
              cacheWrite: 0
            },
            compat: {
              codeMode: "capable"
            }
          },
          {
            id: "deepseek-v4-pro",
            name: "DeepSeek V4 Pro",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 1024e3,
            maxTokens: 384e3,
            cost: {
              input: 0,
              output: 0,
              cacheRead: 0,
              cacheWrite: 0
            },
            compat: {
              codeMode: "capable"
            }
          },
          {
            id: "deepseek-v4-flash",
            name: "DeepSeek V4 Flash",
            reasoning: true,
            input: [
              "text"
            ],
            contextWindow: 1024e3,
            maxTokens: 384e3,
            cost: {
              input: 0,
              output: 0,
              cacheRead: 0,
              cacheWrite: 0
            },
            compat: {
              codeMode: "capable"
            }
          }
        ]
      }
    },
    discovery: {
      volcengine: "refreshable",
      "volcengine-plan": "refreshable"
    }
  },
  providerAuthChoices: [
    {
      provider: "volcengine",
      method: "api-key",
      choiceId: "volcengine-api-key",
      appGuidedSecret: true,
      choiceLabel: "Volcano Engine API key",
      groupId: "volcengine",
      groupLabel: "Volcano Engine",
      groupHint: "API key",
      optionKey: "volcengineApiKey",
      cliFlag: "--volcengine-api-key",
      cliOption: "--volcengine-api-key <key>",
      cliDescription: "Volcano Engine API key"
    }
  ],
  configSchema: {
    type: "object",
    additionalProperties: false,
    properties: {}
  },
  contracts: {
    speechProviders: [
      "volcengine"
    ]
  }
};

// ../../guionai/volcengine-provider/models.ts
var VOLCENGINE_PROVIDER_CATALOG = buildManifestProviderCatalogFamily({
  surfaces: [
    {
      id: "volcengine",
      label: "Volcengine",
      catalog: openclaw_plugin_default.modelCatalog.providers.volcengine
    },
    {
      id: "volcengine-plan",
      label: "Volcengine Plan",
      catalog: openclaw_plugin_default.modelCatalog.providers["volcengine-plan"]
    }
  ]
});
var DOUBAO_PROVIDER = VOLCENGINE_PROVIDER_CATALOG.entries[0];
var DOUBAO_CODING_PROVIDER = VOLCENGINE_PROVIDER_CATALOG.entries[1];
var DOUBAO_BASE_URL = DOUBAO_PROVIDER.baseUrl;
var DOUBAO_CODING_BASE_URL = DOUBAO_CODING_PROVIDER.baseUrl;
var DOUBAO_MODEL_CATALOG = DOUBAO_PROVIDER.models;
var DOUBAO_CODING_MODEL_CATALOG = DOUBAO_CODING_PROVIDER.models;

// ../../guionai/volcengine-provider/api.ts
var VOLCENGINE_UNSUPPORTED_TOOL_SCHEMA_KEYWORDS = [
  "minLength",
  "maxLength",
  "minItems",
  "maxItems",
  "minContains",
  "maxContains"
];
function mergeUnsupportedToolSchemaKeywords(existing) {
  const merged = uniqueStrings([
    ...existing ?? [],
    ...VOLCENGINE_UNSUPPORTED_TOOL_SCHEMA_KEYWORDS
  ]);
  return existing?.length === merged.length && existing.every((value, index) => value === merged[index]) ? existing : merged;
}
function applyVolcengineToolSchemaCompat(model) {
  return applyModelCompatPatch(model, {
    unsupportedToolSchemaKeywords: mergeUnsupportedToolSchemaKeywords(
      model.compat?.unsupportedToolSchemaKeywords
    )
  });
}

// ../../guionai/volcengine-provider/speech-provider.ts
import { normalizeResolvedSecretInputString } from "openclaw/plugin-sdk/secret-input";
import {
  parseSpeechDirectiveNumberOverride,
  resolveSpeechProviderApiKey,
  trimToUndefined
} from "openclaw/plugin-sdk/speech-core";
import { asFiniteNumberInRange, asOptionalRecord } from "openclaw/plugin-sdk/string-coerce-runtime";

// ../../guionai/volcengine-provider/tts.ts
import * as crypto from "node:crypto";
import { canonicalizeBase64 } from "openclaw/plugin-sdk/media-runtime";
import { readResponseWithLimit } from "openclaw/plugin-sdk/response-limit-runtime";
import { fetchWithSsrFGuard } from "openclaw/plugin-sdk/ssrf-runtime";
var DEFAULT_SEED_VOICE = "en_female_anna_mars_bigtts";
var DEFAULT_LEGACY_VOICE = "zh_female_xiaohe_uranus_bigtts";
var DEFAULT_CLUSTER = "volcano_tts";
var DEFAULT_SEED_TTS_RESOURCE_ID = "seed-tts-1.0";
var DEFAULT_SEED_TTS_APP_KEY = "aGjiRDfUWi";
var VOLCENGINE_TTS_RESPONSE_MAX_BYTES = 16 * 1024 * 1024;
var BYTEPLUS_SEED_TTS_URL = "https://voice.ap-southeast-1.bytepluses.com/api/v3/tts/unidirectional";
var VOLCENGINE_LEGACY_TTS_URL = "https://openspeech.bytedance.com/api/v1/tts";
function parseJsonObject(text, providerName) {
  try {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("expected JSON object");
    }
    return parsed;
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    throw new Error(`${providerName} TTS: failed to parse response JSON: ${detail}`, {
      cause: err
    });
  }
}
function toTtsResponse(parsed) {
  const header = parsed.header && typeof parsed.header === "object" && !Array.isArray(parsed.header) ? parsed.header : void 0;
  return {
    code: typeof parsed.code === "number" ? parsed.code : typeof header?.code === "number" ? header.code : void 0,
    message: typeof parsed.message === "string" ? parsed.message : typeof header?.message === "string" ? header.message : void 0,
    data: typeof parsed.data === "string" ? parsed.data : void 0
  };
}
function parseLegacyTtsResponse(text) {
  return toTtsResponse(parseJsonObject(text, "Volcengine"));
}
function parseSeedTtsFrames(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return [];
  }
  try {
    return [toTtsResponse(parseJsonObject(trimmed, "BytePlus Seed Speech"))];
  } catch {
  }
  const frames = [];
  for (const line of trimmed.split(/\r?\n/)) {
    const item = line.trim();
    if (!item) {
      continue;
    }
    const json = item.startsWith("data:") ? item.slice("data:".length).trim() : item;
    frames.push(toTtsResponse(parseJsonObject(json, "BytePlus Seed Speech")));
  }
  return frames;
}
function hostnameAllowlist(url) {
  return [new URL(url).hostname];
}
function seedAudioFormat(encoding) {
  return encoding === "wav" ? "pcm" : encoding;
}
async function seedSpeechTTS(params) {
  const {
    text,
    apiKey,
    voice = DEFAULT_SEED_VOICE,
    resourceId = DEFAULT_SEED_TTS_RESOURCE_ID,
    appKey = DEFAULT_SEED_TTS_APP_KEY,
    baseUrl = BYTEPLUS_SEED_TTS_URL,
    speedRatio = 1,
    emotion,
    encoding = "ogg_opus",
    timeoutMs = 3e4
  } = params;
  const audioFormat = seedAudioFormat(encoding);
  const payload = JSON.stringify({
    user: { uid: "openclaw" },
    req_params: {
      text,
      speaker: voice,
      audio_params: {
        format: audioFormat,
        sample_rate: 24e3
      },
      ...speedRatio !== 1 ? { speed_ratio: speedRatio } : {},
      ...emotion ? { emotion } : {}
    }
  });
  const { response, release } = await fetchWithSsrFGuard({
    url: baseUrl,
    init: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
        "X-Api-Key": apiKey,
        "X-Api-Resource-Id": resourceId,
        "X-Api-App-Key": appKey
      },
      body: payload
    },
    timeoutMs,
    policy: { hostnameAllowlist: hostnameAllowlist(baseUrl) },
    auditContext: "volcengine.tts"
  });
  try {
    const responseText = new TextDecoder().decode(
      await readResponseWithLimit(response, VOLCENGINE_TTS_RESPONSE_MAX_BYTES, {
        onOverflow: ({ maxBytes }) => new Error(`BytePlus Seed Speech TTS response exceeds ${maxBytes} bytes`)
      })
    );
    const frames = parseSeedTtsFrames(responseText);
    const chunks = [];
    for (const frame of frames) {
      if (frame.code === 0) {
        if (frame.data) {
          const canonicalAudio = canonicalizeBase64(frame.data);
          if (!canonicalAudio) {
            throw new Error("BytePlus Seed Speech TTS returned malformed base64 audio data");
          }
          chunks.push(Buffer.from(canonicalAudio, "base64"));
        }
        continue;
      }
      if (frame.code === 2e7) {
        continue;
      }
      throw new Error(
        `BytePlus Seed Speech TTS error ${frame.code ?? response.status}: ${frame.message ?? "unknown"}`
      );
    }
    if (!response.ok || chunks.length === 0) {
      throw new Error(`BytePlus Seed Speech TTS error ${response.status}: no audio data`);
    }
    return Buffer.concat(chunks);
  } finally {
    await release();
  }
}
async function legacyVolcengineTTS(params) {
  const {
    text,
    appId,
    token,
    voice = DEFAULT_LEGACY_VOICE,
    cluster = DEFAULT_CLUSTER,
    baseUrl = VOLCENGINE_LEGACY_TTS_URL,
    speedRatio = 1,
    volumeRatio = 1,
    pitchRatio = 1,
    emotion,
    encoding = "ogg_opus",
    timeoutMs = 3e4
  } = params;
  const payload = JSON.stringify({
    app: { appid: appId, token, cluster },
    user: { uid: "openclaw" },
    audio: {
      voice_type: voice,
      encoding,
      speed_ratio: speedRatio,
      volume_ratio: volumeRatio,
      pitch_ratio: pitchRatio,
      ...emotion ? { emotion } : {}
    },
    request: {
      reqid: crypto.randomUUID(),
      text,
      text_type: "plain",
      operation: "query"
    }
  });
  const { response, release } = await fetchWithSsrFGuard({
    url: baseUrl,
    init: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer;${token}`
      },
      body: payload
    },
    timeoutMs,
    policy: { hostnameAllowlist: hostnameAllowlist(baseUrl) },
    auditContext: "volcengine.tts"
  });
  try {
    const responseText = new TextDecoder().decode(
      await readResponseWithLimit(response, VOLCENGINE_TTS_RESPONSE_MAX_BYTES, {
        onOverflow: ({ maxBytes }) => new Error(`Volcengine TTS response exceeds ${maxBytes} bytes`)
      })
    );
    const body = parseLegacyTtsResponse(responseText);
    if (!response.ok || body.code !== 3e3 || !body.data) {
      throw new Error(
        `Volcengine TTS error ${body.code ?? response.status}: ${body.message ?? "unknown"}`
      );
    }
    const canonicalAudio = canonicalizeBase64(body.data);
    if (!canonicalAudio) {
      throw new Error("Volcengine TTS returned malformed base64 audio data");
    }
    return Buffer.from(canonicalAudio, "base64");
  } finally {
    await release();
  }
}
async function volcengineTTS(params) {
  if (params.apiKey) {
    return seedSpeechTTS({ ...params, apiKey: params.apiKey });
  }
  if (params.appId && params.token) {
    return legacyVolcengineTTS({ ...params, appId: params.appId, token: params.token });
  }
  throw new Error(
    "Volcengine TTS credentials missing. Set a BytePlus Seed Speech API key or legacy AppID/token."
  );
}

// ../../guionai/volcengine-provider/speech-provider.ts
var DEFAULT_VOICE = "en_female_anna_mars_bigtts";
var DEFAULT_CLUSTER2 = "volcano_tts";
var DEFAULT_RESOURCE_ID = "seed-tts-1.0";
var DEFAULT_APP_KEY = "aGjiRDfUWi";
var VOLCENGINE_VOICES = [
  "en_female_anna_mars_bigtts",
  "en_male_adam_mars_bigtts",
  "en_female_sarah_mars_bigtts",
  "en_male_smith_mars_bigtts",
  "zh_female_cancan_mars_bigtts",
  "zh_female_qingxinnvsheng_mars_bigtts",
  "zh_female_linjia_mars_bigtts",
  "zh_male_wennuanahu_moon_bigtts",
  "zh_male_shaonianzixin_moon_bigtts",
  "zh_female_shuangkuaisisi_moon_bigtts"
];
function normalizeSpeedRatio(value) {
  return asFiniteNumberInRange(value, { min: 0.2, max: 3 });
}
function normalizeVolcengineProviderConfig(rawConfig) {
  const providers = asOptionalRecord(rawConfig.providers);
  const raw = asOptionalRecord(providers?.volcengine) ?? asOptionalRecord(rawConfig.volcengine);
  return {
    apiKey: normalizeResolvedSecretInputString({
      value: raw?.apiKey,
      path: "tts.providers.volcengine.apiKey"
    }),
    appId: trimToUndefined(raw?.appId),
    token: normalizeResolvedSecretInputString({
      value: raw?.token,
      path: "tts.providers.volcengine.token"
    }),
    voice: trimToUndefined(raw?.voice) ?? trimToUndefined(process.env.VOLCENGINE_TTS_VOICE) ?? DEFAULT_VOICE,
    cluster: trimToUndefined(raw?.cluster) ?? trimToUndefined(process.env.VOLCENGINE_TTS_CLUSTER) ?? DEFAULT_CLUSTER2,
    resourceId: trimToUndefined(raw?.resourceId) ?? trimToUndefined(process.env.VOLCENGINE_TTS_RESOURCE_ID) ?? DEFAULT_RESOURCE_ID,
    appKey: trimToUndefined(raw?.appKey) ?? trimToUndefined(process.env.VOLCENGINE_TTS_APP_KEY) ?? DEFAULT_APP_KEY,
    baseUrl: trimToUndefined(raw?.baseUrl) ?? trimToUndefined(process.env.VOLCENGINE_TTS_BASE_URL),
    speedRatio: normalizeSpeedRatio(raw?.speedRatio),
    emotion: trimToUndefined(raw?.emotion)
  };
}
function resolveSeedSpeechApiKey(configApiKey) {
  return resolveSpeechProviderApiKey(
    configApiKey,
    process.env.VOLCENGINE_TTS_API_KEY,
    process.env.BYTEPLUS_SEED_SPEECH_API_KEY
  );
}
function resolveLegacyVolcengineCredentials(config) {
  return {
    appId: trimToUndefined(config.appId) ?? trimToUndefined(process.env.VOLCENGINE_TTS_APPID),
    token: resolveSpeechProviderApiKey(config.token, process.env.VOLCENGINE_TTS_TOKEN)
  };
}
function readProviderConfig(config) {
  const normalized = normalizeVolcengineProviderConfig({});
  return {
    apiKey: normalizeResolvedSecretInputString({
      value: config.apiKey,
      path: "tts.providers.volcengine.apiKey"
    }) ?? normalized.apiKey,
    appId: trimToUndefined(config.appId) ?? normalized.appId,
    token: trimToUndefined(config.token) ?? normalized.token,
    voice: trimToUndefined(config.voice) ?? normalized.voice,
    cluster: trimToUndefined(config.cluster) ?? normalized.cluster,
    resourceId: trimToUndefined(config.resourceId) ?? normalized.resourceId,
    appKey: trimToUndefined(config.appKey) ?? normalized.appKey,
    baseUrl: trimToUndefined(config.baseUrl) ?? normalized.baseUrl,
    speedRatio: normalizeSpeedRatio(config.speedRatio) ?? normalized.speedRatio,
    emotion: trimToUndefined(config.emotion) ?? normalized.emotion
  };
}
function readVolcengineOverrides(overrides) {
  if (!overrides) {
    return {};
  }
  return {
    voice: trimToUndefined(overrides.voice),
    speedRatio: normalizeSpeedRatio(overrides.speedRatio),
    emotion: trimToUndefined(overrides.emotion)
  };
}
function parseDirectiveToken(ctx) {
  switch (ctx.key) {
    case "voice":
    case "volcengine_voice":
    case "volcenginevoice":
      if (!ctx.policy.allowVoice) {
        return { handled: true };
      }
      return { handled: true, overrides: { ...ctx.currentOverrides, voice: ctx.value } };
    case "speed":
    case "speedratio":
    case "speed_ratio": {
      return parseSpeechDirectiveNumberOverride({
        ctx,
        overrideKey: "speedRatio",
        range: { min: 0.2, max: 3 },
        warning: (value) => `invalid Volcengine speedRatio "${value}"`,
        mergeCurrentOverrides: true
      });
    }
    case "emotion":
      if (!ctx.policy.allowVoiceSettings) {
        return { handled: true };
      }
      return { handled: true, overrides: { ...ctx.currentOverrides, emotion: ctx.value } };
    default:
      return { handled: false };
  }
}
function buildVolcengineSpeechProvider() {
  return {
    id: "volcengine",
    label: "Volcengine",
    autoSelectOrder: 90,
    aliases: ["bytedance", "doubao"],
    voices: VOLCENGINE_VOICES,
    resolveConfig: ({ rawConfig }) => normalizeVolcengineProviderConfig(rawConfig),
    parseDirectiveToken,
    listVoices: async () => VOLCENGINE_VOICES.map((v) => ({
      id: v,
      name: v.replace(/^(?:en|zh)_(female|male)_/, "").replace(/_.*$/, ""),
      locale: v.startsWith("en_") ? "en-US" : "zh-CN",
      gender: v.includes("_female_") ? "female" : "male"
    })),
    isConfigured: ({ providerConfig }) => {
      const cfg = readProviderConfig(providerConfig);
      const legacy = resolveLegacyVolcengineCredentials(cfg);
      return Boolean(resolveSeedSpeechApiKey(cfg.apiKey) || legacy.appId && legacy.token);
    },
    synthesize: async (req) => {
      const cfg = readProviderConfig(req.providerConfig);
      const overrides = readVolcengineOverrides(req.providerOverrides);
      const apiKey = resolveSeedSpeechApiKey(cfg.apiKey);
      const { appId, token } = resolveLegacyVolcengineCredentials(cfg);
      if (!apiKey && (!appId || !token)) {
        throw new Error(
          "Volcengine TTS credentials missing. Set VOLCENGINE_TTS_API_KEY, BYTEPLUS_SEED_SPEECH_API_KEY, or legacy VOLCENGINE_TTS_APPID and VOLCENGINE_TTS_TOKEN."
        );
      }
      const isVoiceNote = req.target === "voice-note";
      const encoding = isVoiceNote ? "ogg_opus" : "mp3";
      const audioBuffer = await volcengineTTS({
        text: req.text,
        apiKey,
        appId,
        token,
        voice: overrides.voice ?? cfg.voice,
        cluster: cfg.cluster,
        resourceId: cfg.resourceId,
        appKey: cfg.appKey,
        baseUrl: cfg.baseUrl,
        speedRatio: overrides.speedRatio ?? cfg.speedRatio,
        emotion: overrides.emotion ?? cfg.emotion,
        encoding,
        timeoutMs: req.timeoutMs
      });
      return {
        audioBuffer,
        outputFormat: encoding === "ogg_opus" ? "opus" : "mp3",
        fileExtension: encoding === "ogg_opus" ? ".opus" : ".mp3",
        voiceCompatible: isVoiceNote
      };
    }
  };
}

// ../../guionai/volcengine-provider/index.ts
var PROVIDER_ID = "volcengine";
var VOLCENGINE_DEFAULT_MODEL_REF = readManifestProviderDefaultModelRef(
  openclaw_plugin_default,
  "volcengine-plan"
);
var index_default = defineSingleProviderPluginEntry({
  id: PROVIDER_ID,
  name: "Volcengine Provider",
  description: "Bundled Volcengine provider plugin",
  manifest: openclaw_plugin_default,
  provider: {
    label: "Volcengine",
    docsPath: "/concepts/model-providers#volcano-engine-doubao",
    hookAliases: ["volcengine-plan"],
    manifestAuth: {
      defaultModel: VOLCENGINE_DEFAULT_MODEL_REF,
      applyConfig: (cfg) => ensureModelAllowlistEntry({ cfg, modelRef: VOLCENGINE_DEFAULT_MODEL_REF })
    },
    ...buildOpenAICompatibleProviderFamilyCatalog({
      credentialProviderId: PROVIDER_ID,
      entries: VOLCENGINE_PROVIDER_CATALOG.entries,
      staticCatalog: VOLCENGINE_PROVIDER_CATALOG.staticCatalog,
      augmentModelCatalog: VOLCENGINE_PROVIDER_CATALOG.augmentModelCatalog
    }),
    normalizeResolvedModel: ({ model }) => applyVolcengineToolSchemaCompat(model)
  },
  register(api) {
    api.registerSpeechProvider(buildVolcengineSpeechProvider());
  }
});
export {
  index_default as default
};
