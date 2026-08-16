# @guionai/volcengine-tts-provider

Volcengine (豆包) provider plugin for OpenClaw — model catalog + TTS (Seed Speech API).

Maintained fork of the upstream [`@openclaw/volcengine-provider`](https://github.com/openclaw/openclaw/tree/main/extensions/volcengine) (MIT, OpenClaw Foundation), republished on ClawHub because the upstream npm package is an unresolvable 0.0.0 placeholder. Track upstream for upstream fixes.

## Install

```bash
openclaw plugins install clawhub:guionai/volcengine-tts-provider
```

Requires OpenClaw >= 2026.8.1.

## Configure

Set the TTS API key in the gateway environment (same key as upstream):

```bash
export VOLCENGINE_TTS_API_KEY="byteplus_seed_speech_api_key..."
```

TTS example (mainland endpoint + resource, voice is your account's available 音色):

```json5
tts: {
  auto: "tagged",
  provider: "volcengine",
  providers: {
    volcengine: {
      apiKey: "${VOLCENGINE_TTS_API_KEY}",
      baseUrl: "https://openspeech.bytedance.com/api/v3/tts/unidirectional",
      resourceId: "seed-tts-2.0",
      speakerVoice: "zh_female_sajiaoxuemei_uranus_bigtts",
    },
  },
}
```

## Smoke test

```bash
openclaw agent -m '用语音回我一句话'   # expect a voice note
```
