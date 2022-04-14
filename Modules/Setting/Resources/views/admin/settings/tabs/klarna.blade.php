<div class="row">
    <div class="col-md-8">
        {{ Form::checkbox('klarna_enabled', trans('setting::attributes.klarna_enabled'), trans('setting::settings.form.enable_klarna'), $errors, $settings) }}
       
        {{ Form::text('klarna_label', trans('setting::attributes.translatable.klarna_label'), $errors, $settings, ['required' => true]) }}
        {{ Form::textarea('klarna_description', trans('setting::attributes.translatable.klarna_description'), $errors, $settings, ['rows' => 3, 'required' => true]) }}
        {{ Form::text('klarna_username', trans('setting::attributes.klarna_username'), $errors, $settings, ['required' => true]) }}
        {{ Form::password('klarna_secret_key', trans('setting::attributes.klarna_secret_key'), $errors, $settings, ['required' => true]) }}
        
    </div>
</div>
