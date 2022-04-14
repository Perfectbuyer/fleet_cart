{{ Form::text('name', trans('product::attributes.name'), $errors, $product, ['labelCol' => 2, 'required' => true]) }}
{{ Form::wysiwyg('description', trans('product::attributes.description'), $errors, $product, ['labelCol' => 2, 'required' => true]) }}

<div class="row">
    <div class="col-md-8">
        {{ Form::select('brand_id', trans('product::attributes.brand_id'), $errors, $brands, $product) }}
        {{ Form::select('categories', trans('product::attributes.categories'), $errors, $categories, $product, ['class' => 'selectize prevent-creation', 'multiple' => true]) }}
        {{ Form::select('tax_class_id', trans('product::attributes.tax_class_id'), $errors, $taxClasses, $product) }}
        {{ Form::select('tags', trans('product::attributes.tags'), $errors, $tags, $product, ['class' => 'selectize prevent-creation', 'multiple' => true]) }}
        {{ Form::checkbox('virtual', trans('product::attributes.virtual'), trans('product::products.form.the_product_won\'t_be_shipped'), $errors, $product) }}
        <div class="form-group">
            <label for="" class="col-md-3 control-label text-left">Pre-Launching Date</label>
            <div class="col-md-9">
                <input type="date" name="pre_launch" class="form-control" value="{{$product->pre_launch}}" />
            </div>
        </div>
        {{ Form::checkbox('is_active', trans('product::attributes.is_active'), trans('product::products.form.enable_the_product'), $errors, $product, ['checked' => true]) }}
    </div>
</div>
