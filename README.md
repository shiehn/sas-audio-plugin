# Audio Texture Plugin

A [Signals & Sorcery](https://signalsandsorcery.com) plugin for generating AI audio textures from text prompts.

<p align="center">
  <img src="assets/signals-and-sorcery.png" alt="Signals & Sorcery" width="420" />
</p>

> Part of the **[Signals & Sorcery](https://signalsandsorcery.com)** ecosystem.

## What it does

- Generate ambient pads, textures, and soundscapes from text descriptions
- Audio is generated via AI and placed directly on tracks
- Supports regeneration with different prompts
- Per-track volume, pan, mute, and solo controls
- Stem splitting for isolating parts of generated audio

## Install

From within Signals & Sorcery: **Settings > Manage Plugins > Add Plugin** and enter:

```
https://github.com/shiehn/sas-audio-plugin
```

Or clone manually into `~/.signals-and-sorcery/plugins/@signalsandsorcery/audio-texture/`.

## Development

Built with the [@signalsandsorcery/plugin-sdk](https://github.com/shiehn/sas-plugin-sdk). See the [Plugin SDK docs](https://signalsandsorcery.com/plugin-sdk/) for the full API reference.

## The Signals & Sorcery Ecosystem

- **[Signals & Sorcery](https://signalsandsorcery.com)** — the flagship AI music production workstation
- **[sas-plugin-sdk](https://github.com/shiehn/sas-plugin-sdk)** — TypeScript SDK for building generator plugins
- **[sas-synth-plugin](https://github.com/shiehn/sas-synth-plugin)** — AI MIDI generation with Surge XT
- **[sas-sample-plugin](https://github.com/shiehn/sas-sample-plugin)** — Sample library browser with time-stretching
- **[DeclarAgent](https://github.com/shiehn/DeclarAgent)** — Declarative agent + MCP transport for S&S

<p align="center">
  <a href="https://signalsandsorcery.com">signalsandsorcery.com</a>
</p>

## License

MIT
