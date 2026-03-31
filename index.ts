/**
 * @signalsandsorcery/audio-texture — Built-in Audio Texture Generator Plugin
 *
 * Generates AI audio textures from text prompts using the host's
 * audio generation pipeline (Lyria 3). Manages audio tracks within scenes.
 */

import type { ComponentType } from 'react';
import type {
  GeneratorPlugin,
  PluginHost,
  PluginUIProps,
  PluginSettingsSchema,
  MusicalContext,
} from '../../../shared/types/plugin-sdk.types';
import { AudioTexturePanel } from './AudioTexturePanel';

export class AudioTexturePlugin implements GeneratorPlugin {
  readonly id = '@signalsandsorcery/audio-texture';
  readonly displayName = 'Audio';
  readonly version = '1.0.0';
  readonly description = 'AI-generated audio textures using text prompts';
  readonly generatorType = 'audio' as const;
  readonly minHostVersion = '1.0.0';

  private host: PluginHost | null = null;

  async activate(host: PluginHost): Promise<void> {
    this.host = host;
    console.log('[AudioTexturePlugin] Activated');
  }

  async deactivate(): Promise<void> {
    this.host = null;
    console.log('[AudioTexturePlugin] Deactivated');
  }

  getUIComponent(): ComponentType<PluginUIProps> {
    return AudioTexturePanel;
  }

  getSettingsSchema(): PluginSettingsSchema | null {
    return null;
  }

  async onSceneChanged(_sceneId: string | null): Promise<void> {
    // Audio tracks are loaded by the host on scene change
  }

  onContextChanged(_context: MusicalContext): void {
    // No action needed for audio textures on context change
  }
}

export default AudioTexturePlugin;
